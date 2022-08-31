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
})

describe(`Random Quote`, () => {
	test(`Test 01: Get random Quote`, () => {
		const randomQuote = getRandom()
		expect(quotes).toContain(randomQuote)
		assert(randomQuote.quote)
		assert(randomQuote.author)
	})
})
