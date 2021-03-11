let littlePuns = require('./puns/little-pun-book-the.json');
let dadPuns = require('./puns/dad.json');
let puns = littlePuns.concat(dadPuns);

let randomPun = () => {
	return puns[Math.floor(Math.random() * puns.length)];
}

module.exports = {
	puns,
	randomPun
};