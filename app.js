#!/usr/bin/env node

const commander = require('commander'),
    { prompt } = require('inquirer'),
    chalk = require('chalk'),
    fs = require('fs')
    const http = require('https'); // or 'https' for https:// URLs






commander
    .version('0.0.1')
    .description('Configuration files creator.')

commander
    .command('-signup')
    .alias('su')
    .description('Sign up user.')
    .action((name, cmd) => {
        if (
            cmd.extension &&
            !['json', 'txt', 'cfg'].includes(cmd.extension)
        ) {
            console.log(chalk.red('\nExtension is not allowed.'))
        } else {
            prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Name: ',
                },
                {
                    type: 'password',
                    name: 'password',
                    message: 'Password: ',
                },
            ]).then((options) => {

            })
        }
    })

commander 
.command('start server')
.action((cmd) => {
    server = require('./server');
    server.serverWeb();
})

commander
    .command('save <url>')
   
    .description('Save file from url.')
    .action((url, cmd) => {
        const file = fs.createWriteStream("file.jpg");
        const request = http.get(url, function(response) {
          response.pipe(file);
    });
    })


// commander
//     .command('create <name>')
//     .option('--extension <value>', 'File extension')
//     .alias('c')
//     .description('Create new configuration file.')
//     .action((name, cmd) => {
//         if (
//             cmd.extension &&
//             !['json', 'txt', 'cfg'].includes(cmd.extension)
//         ) {
//             console.log(chalk.red('\nExtension is not allowed.'))
//         } else {
//             prompt([
//                 {
//                     type: 'input',
//                     name: 'charset',
//                     message: 'Charset: ',
//                 },
//                 {
//                     type: 'input',
//                     name: 'max_ram_usage',
//                     message: 'Max RAM usage, Mb: ',
//                 },
//                 {
//                     type: 'input',
//                     name: 'max_cpu_usage',
//                     message: 'Max CPU usage, %: ',
//                 },
//                 {
//                     type: 'input',
//                     name: 'check_updates_interval',
//                     message: 'Updates interval, ms: ',
//                 },
//                 {
//                     type: 'input',
//                     name: 'processes_count',
//                     message: 'Processes count: ',
//                 },
//             ]).then((options) => {
//                 if (cmd.extension && cmd.extension === 'json') {
//                     fs.writeFileSync(
//                         `files/${name}.${cmd.extension}`,
//                         JSON.stringify(options)
//                     )
//                 } else {
//                     let data = ''
//                     for (let item in options)
//                         data += `${item}=${options[item]} \n`

//                     fs.writeFileSync(`files/${name}.cfg`, data)
//                 }
//                 console.log(
//                     chalk.green(
//                         `\nFile "${name}.${cmd.extension || 'cfg'
//                         }" created.`
//                     )
//                 )
//             })
//         }
//     })

// commander
//     .command('all')
//     .alias('a')
//     .description('Show all configuration files.')
//     .action(() => {
//         const files = fs.readdirSync('files')

//         let data = ''
//         for (let file of files) data += `${file} \n`

//         console.log(
//             chalk.grey(`\nConfiguration files: \n\n${data}`)
//         )
//     })

commander.parse(process.argv)