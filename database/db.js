const mysql = require('mysql')

const connection = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_DATABASE,
})

connection.connect( (error)=> {
    if(error){
        console.log('Connection Error: '+error)
        return
    }
    console.log('¡Connected to MYSQL database!')
})

module.exports = connection