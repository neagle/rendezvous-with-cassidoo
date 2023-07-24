const maximumProfit = require("./maximum-profit.js")

const inputs = [
	[
		[7, 1, 5, 3, 6, 4],
		// Buy on day 2, and sell on day 5, your profit = 6-1 = 5.
		5,
	],
	[[10, 15, 20, 100], 90],
	[[23, 41, 123, 3, 42, 5, 6], 100],
]

const tests = inputs.map((test) => ({
	input: test[0],
	output: test[1],
}))

describe("testing maximumProfit", () => {
	it.each(tests)(
		"should return the correct maximum profit",
		({ input, output }) => {
			expect(maximumProfit(input)).toStrictEqual(output)
		}
	)
})
