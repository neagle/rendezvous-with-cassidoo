const sumEveryOther = require("./sum-every-other.js")

const inputs = [
	[548915381, 26],
	[10, 0],
	// Make sure it handles decimals
	[1010.11, 1],
]

const tests = inputs.map((test) => ({
	input: test[0],
	output: test[1],
}))

describe("testing sum every other", () => {
	it.each(tests)(
		"should return the correct sum of every second digit",
		({ input, output }) => {
			expect(sumEveryOther(input)).toStrictEqual(output)
		}
	)
})
