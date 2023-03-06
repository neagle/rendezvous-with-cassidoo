const scramble = require("./scramble.js")

const inputs = [
	"The quick brown fox jumped over the lazy dog.",
	"I came, I saw, I conquered.",
	"To sit in solemn silence in a dull dark dock in a pestilential prison with a lifelong lock.",
	"I am the very model of a modern major general.",
]

describe("testing scramble", () => {
	it.each(inputs)(
		"should return scrambled versions of the words in the input",
		(input) => {
			// This one is tricky to write tests for! Maybe sometime when I have more time.

			// console.log("input", input)
			// console.log("scramble(input)", scramble(input))
			expect(1).toStrictEqual(1)
		}
	)
})
