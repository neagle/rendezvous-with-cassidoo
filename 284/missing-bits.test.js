const missingBits = require("./missing-bits.js")

const inputs = [
	[[1, 2, 3, 4, 20, 21, 22, 23], "[1,2,3,4,...,20,21,22,23]"],
	[[1, 2, 3, 5, 6], "[1,2,3,4,5,6]"],
	[[1, 3, 20, 27], "[1,2,3,...,20,...,27]"],
]

const tests = inputs.map((test) => ({
	input: test[0],
	output: test[1],
}))

describe("testing missing bits", () => {
	it.each(tests)(
		"should fill in the missing bits of a sequence with a number or an ellipses",
		({ input, output }) => {
			expect(missingBits(input)).toStrictEqual(output)
		}
	)
})
