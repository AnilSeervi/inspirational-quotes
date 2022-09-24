import { quotes } from './quotes'
import { Quote } from './types'

export const getAll = (): Quote[] => quotes

export const getRandom = (): Quote =>
	quotes[Math.round(Math.random() * (quotes.length - 1))]
