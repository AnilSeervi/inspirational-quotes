const { getAll, getRandom } = require(`../src/index`)

const print = (msg) => console.log(msg, `passed, exit 0`)

if (getAll && getRandom) print(`Test 0: Looking good so far`)
else throw new Error(`Looks like we got a bug! Typo??, abort!!!`)

const quotes = getAll()
const { author, quote } = getRandom()

if (quotes.length > 0) {
	print(`Test 1: getAll quotes`)
} else
	throw new Error(
		`Looks like we didn't get any quotes back from the bank!, exit 1`
	)

if (author && quote) print(`Test 2: getRandom quote`)
else
	throw new Error(`Interesting! No quote || author found on random!!!, exit 1`)
