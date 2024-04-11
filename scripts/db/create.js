const mysql = require('mysql2');

require('dotenv').config();

const {DB_URL} = process.env; //remoto 

//local
const connection = mysql.createConnection({
	host: DB_HOST,
	user: DB_USER,
	password: DB_PASS,
});

connection.connect((err) => {
	if (err) throw err;
	connection.query(`CREATE DATABASE ${dbName}`, (err, result) => {
		if (err && err.code === 'ER_DB_CREATE_EXISTS') {
			console.log('Db already created');
			process.exit(0);
		}

		if (err) {
			throw err;
		}

		console.log('Created db');
		process.exit(0);
	});
});