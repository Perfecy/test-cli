const { Pool } = require('pg')

const config = require('../config')

const pool = new Pool({
  user: config.user_db,
  host: config.host_db,
  database: config.name_db,
  password: config.pass_db,
  port: config.port_db,
})


pool.query("CREATE TABLE users ( id INT, name VARCHAR(24), password VARCHAR(255))", (err,res) => {
  console.log(err,res)
  pool.end()
})


// module.exports = {
//   query: (text, params, callback) => {
//     return pool.query(text, params, callback)
//   },
// }