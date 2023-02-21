const numBalanced = require("./num-balanced.js")

const inputs = [
	["()", 0],
	["(()", 1],
	["))()))))()", 6],
	[")))))", 5],
]

const tests = inputs.map((test) => ({
	input: test[0],
	output: test[1],
}))

describe("testing num balanced", () => {
	it.each(tests)(
		"should return the number of parentheses that need to be added to balance the string",
		({ input, output }) => {
			expect(numBalanced(input)).toStrictEqual(output)
		}
	)
})
