let littlePuns = require('./puns/little-pun-book-the.json');
// let dadPuns = require('./puns/dad.json');
// let testPuns = require('./puns/test.json');
let puns = littlePuns;
let md = require('markdown-it')();
let sources = require('./puns/sources.json');





let randomPun = () => {
	const punSelection = puns[Math.floor(Math.random() * puns.length)];
	return {
		pun: {
			html: md.render(punSelection, { breaks: true }),
			raw: punSelection
		},
		source: sources[0]
	}
}

module.exports = {
	puns,
	randomPun
};
