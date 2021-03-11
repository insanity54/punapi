require('dotenv').config();
const debug = require('debug')('punapi');
const envImport = require('@grimtech/envimport');
const express = require('express');
let nunjucks = require('nunjucks');
let app = express()
let port = envImport('PORT');
let { randomPun } = require('./pun');

app.set('view engine', 'nunjucks');
app.use('/styles', express.static(__dirname + '/node_modules/mvp.css/'));

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.get('/', async (req, res, next) => {
	let pun = randomPun();
	let data = {
		message: pun,
		layout:  'layout.njk',
		title: 'Random Pun Generator'
	}
	res.render('index.njk', data);
})

app.listen(port, () => {
	debug(`listening on port ${port}`);
});