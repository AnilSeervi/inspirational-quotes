import { quotes } from './quotes'
import { Quotes } from './types'

export const getAll = (): Quotes[] => quotes

export const getRandom = (): Quotes =>
	quotes[Math.round(Math.random() * (quotes.length - 1))]
