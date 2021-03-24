require('dotenv').config();
const debug = require('debug')('punapi');
const envImport = require('@grimtech/envimport');
const express = require('express');
let nunjucks = require('nunjucks');
let app = express();
let port = envImport('PORT');
let { randomPun } = require('./pun');

app.set('view engine', 'nunjucks');
app.use('/styles', express.static(__dirname + '/node_modules/mvp.css/'));

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.get('/', async (req, res, next) => {
	let { pun } = randomPun();
	let data = {
		pun: pun.html,
		layout:  'layout.njk',
		title: 'Random Pun Generator'
	}
	res.render('index.njk', data);
});

app.get('/api', async (req, res, next) => {
	let { pun, source } = randomPun();
	let data = {
		pun,
		source
	};
	res.set('Content-Type', 'application/json');
	res.status(200).send(JSON.stringify(data));
});

app.get('/about', async (req, res, next) => {
	let data = {
		layout: 'layout.njk',
		title: 'Random Pun Generator'
	};
	res.render('about.njk', data);
});

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
