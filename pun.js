let littlePuns = require('./puns/little-pun-book-the.json');
let dadPuns = require('./puns/dad.json');
// let testPuns = require('./puns/test.json');
let puns = littlePuns.concat(dadPuns);
let md = require('markdown-it')();



let randomPun = () => {
	const punSelection = puns[Math.floor(Math.random() * puns.length)];
	return md.render(punSelection, { breaks: true });
}

module.exports = {
	puns,
	randomPun
};