const express = require('express');

const db = require('../db');

const app = express();

const PORT = process.env.PORT || 5000

function serverWeb(){

  app.get('/:id', (req, result, next) => {
    db.query('SELECT * FROM users WHERE id = $1', [req.params.id], (err, res) => {
      if (err) {

        const error = new Error('Ошибка приложения!');
        error.status = 500;
        error.message = err.message;
        return next(error); 
      }
      result.send(res.rows[0])
      
    })
  })

  app.use(function(req, res, next){
    const err = new Error('Ни хрена не найдено!');
    err.status = 404;
    next(err);   
  });
  
  app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    })     
  })

  const server = app.listen(PORT, function () {  
    console.log('Сервер пашет на порту: ' + server.address().port);
  })

}

module.exports.serverWeb = serverWeb;