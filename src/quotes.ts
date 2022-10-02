// some good-to-have rules
// try to use right single quotation mark `’`(\u2019) (String.fromCharCode(0x2019)), not apostrophe `'` (String.fromCharCode(0x27))
// put those strings in backticks || linter gon complain
// Use a period `.` at the end of the sentence || test gon fail
// source?: String , is optional but helpful.

import { Quote } from './types'

/* Syntax
{
  quote:
  author:
  source?:
}
*/

export const quotes: Quote[] = [
	{
		quote: `Amateurs know that contributing something is better than contributing nothing.`,
		author: `Austin Kleon`,
		source: `Show Your Work!`,
	},
	{
		quote: `Carving out a space for yourself online, somewhere where you can express yourself and share your work, is still one of the best possible investments you can make with your time.`,
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
	},
	{
		quote: `There’s never a space under paintings in a gallery where someone writes their opinion.`,
		author: `Natalie Dee`,
	},
	{
		quote: `If you don’t produce, you won’t thrive - no matter how skilled or talented you are.`,
		author: `Cal Newport`,
		source: `Deep Work`,
	},
	{
		quote: `The only art I’ll ever study is stuff that I can steal from.`,
		author: `David Bowie`,
	},
	{
		quote: `Everything that needs to be said has already been said. But, since no one was listening, everyting must be said again.`,
		author: `André Gide`,
	},
	{
		quote: `What is originality? Undetected plagiarism.`,
		author: `William Ralph Inge`,
	},
	{
		quote: `It is better to take what does not belong to you than to let it lie around neglected.`,
		author: `Mark Twain`,
	},
	{
		quote: `Fake it ’till you make it.`,
		author: `Unknown`,
	},
	{
		quote: `Those who do not want to imitate anything, produce nothing.`,
		author: `Salvador Dalí`,
	},
	{
		quote: `If you have one person you’re influenced by, everyone will say you’re the next whoever. But if you rip off a hundred people, everyone will say you’re so original!`,
		author: `Gary Panter`,
	},
	{
		quote: `I have stolen all these moves from all these great players. I just try to do them proud, the guys who came before, because I learned so much from them. It’s all in the name of game. It’s a lot bigger than me.`,
		author: `Kobe Bryant`,
	},
	{
		quote: `We don’t know where we get our ideas from. What we do know it that we do not get them from our laptops.`,
		author: `John Cleese`,
	},
	{
		quote: `You never really get to touch anything that you’re doing unless you print it out.`,
		author: `Stanley Donwood`,
	},
	{
		quote: `The work you do while you procrastinate is probably the work you should be doing for the rest of your life.`,
		author: `Jessica Hische`,
	},
	{
		quote: `Avoiding work is the way to focus my mind.`,
		author: `Maira Kalman`,
	},
	{
		quote: `You can’t connect the dots looking forward, you can only connect them looking backwards.`,
		author: `Steve Jobs`,
	},
	{
		quote: `Don’t worry about people stealing your ideas. If your ideas are any good, you’ll have to ram them down people’s throats.`,
		author: `Howard Aiken`,
	},
	{
		quote: `The only mofos in my circle are people that I can learn from.`,
		author: `Ouestlove`,
	},
	{
		quote: `Garbage in, Garbage out.`,
		author: `Unknown`,
	},
	{
		quote: `The best way to get approval is to not need it.`,
		author: `Hugh MacLeod`,
	},
	{
		quote: `Be regular and orderly in your life, so that you may be violent and original in your work.`,
		author: `Gustave Flaubert`,
	},
	{
		quote: `If you don’t take money, they can’t tell you what to do.`,
		author: `Bill Cunningham`,
	},
	{
		quote: `You won’t know how valuable your health is until you’re fighting for it, so fight for it before you have to.`,
		author: `Unknown`,
	},
	{
		quote: `The world starts and ends entirely inside your mind. No matter how rich, pretty, famous or successful you become, you won’t enjoy any of it if you get there at the expense of your mental health.`,
		author: `Unknown`,
	},
	{
		quote: `If you keep one hand on your past and one hand on your future, you’ll never have either. To embrace tomorrow, you must let go of yesterday.`,
		author: `Unknown`,
	},
	{
		quote: `That lesson will repeat itself until you learn it.`,
		author: `Unknown`,
	},
	{
		quote: `Sometimes saying "goodbye" doesn’t mean you don’t love something, it just means you love yourself too.`,
		author: `Unknown`,
	},
	{
		quote: `Self-awareness is realising that there is no opponent - you’re fighting against yourself.`,
		author: `Unknown`,
	},
	{
		quote: `Life is not tiring. Wanting life to be a certain way but no having that confidence to make it that way, is tiring.`,
		author: `Unknown`,
	},
	{
		quote: `Feeling sad after making a decision, doesn’t mean it was the wrong decision.`,
		author: `Unknown`,
	},
	{
		quote: `If you don’t have confidence, you’ll always find a way not to win.`,
		author: `Carl Lewis`,
	},
	{
		quote: `If you wish to be a writer, write.`,
		author: `Epictetus`,
	},
	{
		quote: `Whatever you’re thinking, think bigger.`,
		author: `Tony Hsieh`,
	},
	{
		quote: `I think the thing to do is to enjoy the ride while you’re on it.`,
		author: `Johnny Depp`,
	},
	{
		quote: `If there is one thing that I’ve learned in my career, it is to do more of what’s working, and less of what’s not.`,
		author: `Jimmy Wales`,
	},
	{
		quote: `The way to get started is to quit talking and begin doing.`,
		author: `Walt Disney`,
	},
	{
		quote: `If you want to conquer fear, don’t sit home and think about it. Go out and get busy.`,
		author: `Dale Carnegie`,
	},
	{
		quote: `Never spend it before you have it.`,
		author: `Thomas Jefferson`,
	},
	{
		quote: `Not all readers are leaders, but all leaders are readers.`,
		author: `Harry Truman`,
	},
	{
		quote: `Read the best books first, or you may not have a chance to read them at all.`,
		author: `Henry David Thoream`,
	},
	{
		quote: `He that loves reading has everything within his reach.`,
		author: `Willian Godwin`,
	},
	{
		quote: `Read. Read. Read. Just don’t read one type of book. Read different books by various authors so that you develop different style.`,
		author: `R.L. Stine`,
	},
	{
		quote: `In the case of good books, the point is not to see how many of them you can get through, but rather how many can get through to you.`,
		author: `Mortimer J. Adler`,
	},
	{
		quote: `Books are mirrors: you only see in them what you already have inside you.`,
		author: `Carlos Ruiz Zafon`,
	},
	{
		quote: `No entertainment is so cheap as reading, nor any pleasure so lasting.`,
		author: `Mary Wortley Montagu`,
	},
	{
		quote: `The man who does not read good books has no advantage over the man who can’t read them!`,
		author: `Mark Twain`,
	},
	{
		quote: `Thinking is the hardest work there is, which is the probable reason why so few people engage in it.`,
		author: `Henry Ford`,
	},
	{
		quote: `People do not decide their futures, they decide their habits and their habits decide their futures.`,
		author: `F.M. Alexander`,
	},
	{
		quote: `Nobody who ever gave his best regretted it.`,
		author: `George Halas`,
	},
	{
		quote: `Each time a man stands up for an ideal, or acts to improve the lot of others, or strikes out against injustice, he sends forth a tiny ripple of hope.`,
		author: `Call of Duty: Modern Warfare`,
	},
	{
		quote: `We are what we repeatedly do. Excellence, then, is not an act, but a habit.`,
		author: `Aristotle`,
		source: `Ikigai : The Japanese Secret to a Long and Happy Life`,
	},
	{
		quote: `Put your hand on a hot stove for a minute, and it seems like an hour. Sit with a pretty girl for an hour and it seems like a minute. That is relativity.`,
		author: `Albert Einstein`,
		source: `Ikigai : The Japanese Secret to a Long and Happy Life`,
	},
	{
		quote: `A happy man is too satisfied with the present to dwell on the future.`,
		author: `Albert Einstein`,
		source: `Ikigai : The Japanese Secret to a Long and Happy Life`,
	}, // @anilseervi
	{
		quote: `The state in which people are so involved in an activity that nothing else seems to matter; the experience itself is so enjoyable that people will do it even at great cost, for the sheer sake of doing it.`,
		author: `Mihaly Csikszentmihalyi`,
		source: `Flow : The Psychology of Optimal Experience`,
	}, // @anilseervi
	{
		quote: `You can get everything in life you want if you will just help enough other people get what they want.`,
		author: `Zig Ziglar`,
	}, // @Anish-Shobith
	{
		quote: `Inspiration does exist, but it must find you working.`,
		author: `Pablo Picasso`,
	}, // @Anish-Shobith
	{
		quote: `You are never too old to set another goal or to dream a new dream.`,
		author: `Malala Yousafzai`,
	}, //pratheek-raghunath
]
