import { assert, describe, expect, test } from 'vitest'
import { getAll, getRandom } from '../src/index'
import { quotes } from '../src/quotes'

describe(`All Quotes`, () => {
	test(`Test 01: Get all Quotes`, () => {
		const allQuotes = getAll()
		expect(allQuotes).toEqual(quotes)
		assert(allQuotes.length > 0)
		for (const quote of allQuotes) {
			assert(quote.quote)
			assert(quote.author)
		}
	})

	test(`Test 02: All Quotes end with a period`, () => {
		const allQuotes = getAll()
		for (const quote of allQuotes) {
			assert(quote.quote.endsWith(`.`) || quote.quote.endsWith(`!`))
		}
	})

	test(`Test 03 : Check for proper quote format`, () => {
		const allQuotes = getAll()
		for (const quote of allQuotes) {
			assert(!quote.quote.includes(`'`))
		}
	})

	test(`Test 04 : Check for duplicate quotes`, () => {
		const allQuotes = getAll()
		const allQuoteStrings = allQuotes.map((quoteObj) => quoteObj.quote)
		const uniqueQuoteStrings = [...new Set(allQuoteStrings)]
		expect(allQuoteStrings).toEqual(uniqueQuoteStrings)
	})
})

describe(`Random Quote`, () => {
	test(`Test 01: Get random Quote`, () => {
		const randomQuote = getRandom()
		expect(quotes).toContain(randomQuote)
		assert(randomQuote.quote)
		assert(randomQuote.author)
	})
})
