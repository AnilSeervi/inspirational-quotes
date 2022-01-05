// some good-for rules
// try to use right single quotation mark `’` (String.fromCharCode(0x2019)), not apostrophe `'` (String.fromCharCode(0x27))
// put those strings in backticks || linter gon complain
// source?: String , is optional but helpful.

/* Syntax
{
  quote: 
  author:
  source?:
}
*/

const quotes = [
	{
		quote: `Amateurs know that contributing something is better than contributing nothing.`,
		author: `Austin Kleon`,
		source: `Show Your Work!`,
	},
	{
		quote: `Carving out a space for yourself online, somewhere where you can express yourself and share your work, is still one of the best possible investments you can make with your time`,
		author: `Austin Kleon`,
		source: `Show Your Work!`,
	},
	{
		quote: `It’s not how much money you make, it’s how much money you keep.`,
		author: `Robert T. Kiyosaki`,
		source: `Rich Dad Poor Dad`,
	},
	{
		quote: `Rich people acquire assets. The poor and middle class acquire liabilities, but they think they are assets.`,
		author: `Robert T. Kiyosaki`,
		source: `Rich Dad Poor Dad`,
	},
	{
		quote: `It is what you know that is your greatest wealth. It is what you do not know that is your greatest risk.`,
		author: `Robert T. Kiyosaki`,
		source: `Rich Dad Poor Dad`,
	},
	{
		quote: `The simple thing I’ve learned over the years is just to have a starting point and once you have a starting point the work seems to make itself.`,
		author: `David Shrigley`,
		source: `Keep Going - Austin Kleon`,
	},
	{
		quote: `There’s never a space under paintings in a gallery where someone writes their opinion.`,
		author: `Natalie Dee`,
		source: `Show Your Work! - Austin Kleon`,
	},
]

module.exports = quotes
