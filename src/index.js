const quotes = require(`./quotes`)

const getAll = () => quotes

const getRandom = () => quotes[Math.round(Math.random() * (quotes.length - 1))]

module.exports = { getAll, getRandom }
