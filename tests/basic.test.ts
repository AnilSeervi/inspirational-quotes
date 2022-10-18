import { assert, beforeEach, describe, expect, test } from 'vitest'
import { getAll, getRandom } from '../src/index'
import { quotes } from '../src/quotes'
import { Quote } from '../src/types'

describe(`All Quotes`, () => {
	let allQuotes: Quote[]
	beforeEach(() => {
		allQuotes = getAll()
	})

	test(`Test 01: Get all Quotes`, () => {
		expect(allQuotes).toEqual(quotes)
		assert(allQuotes.length > 0)
		for (const quote of allQuotes) {
			assert(quote.quote)
			assert(quote.author)
		}
	})

	test(`Test 02: All Quotes end with a period`, () => {
		for (const quote of allQuotes) {
			assert(
				quote.quote.endsWith(`.`) ||
					quote.quote.endsWith(`!`) ||
					quote.quote.endsWith(`?`)
			)
		}
	})

	test(`Test 03 : Check for proper quote format`, () => {
		for (const quote of allQuotes) {
			assert(!quote.quote.includes(`'`))
		}
	})

	test(`Test 04 : Check for duplicate quotes`, () => {
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
