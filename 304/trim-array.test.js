const trimArray = require("./trim-array.js")

const inputs = [
	[
		[[1, 2, 3, 4, 5, 6], 2, 1],
		[3, 4, 5],
	],
	[
		[[6, 2, 4, 3, 7, 1, 3], 5, 0],
		[1, 3],
	],
	[
		[[1, 7], 0, 0],
		[1, 7],
	],
]

const tests = inputs.map((test) => ({
	input: test[0],
	output: test[1],
}))

describe("testing trimArray", () => {
	it.each(tests)(
		"should return correctly trimmed arrays",
		({ input, output }) => {
			expect(trimArray(...input)).toStrictEqual(output)
		}
	)
})
