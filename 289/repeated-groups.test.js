const repeatedGroups = require("./repeated-groups.js")

const inputs = [
	[[1, 2, 2, 4, 5], [[2, 2]]],
	[
		[1, 1, 0, 0, 8, 4, 4, 4, 3, 2, 1, 9, 9],
		[
			[1, 1],
			[0, 0],
			[4, 4, 4],
			[9, 9],
		],
	],
]

const tests = inputs.map((test) => ({
	input: test[0],
	output: test[1],
}))

describe("testing repeating groups", () => {
	it.each(tests)(
		"should return all groups of repeating consecutive numbers",
		({ input, output }) => {
			expect(repeatedGroups(input)).toStrictEqual(output)
		}
	)
})
