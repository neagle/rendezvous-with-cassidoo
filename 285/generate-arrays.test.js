const generateArrays = require("./generate-arrays.js")

const inputs = [
	[4, [[1], [1, 2], [1, 2, 3], [1, 2, 3, 4]]],
	[1, [[1]]],
]

const tests = inputs.map((test) => ({
	input: test[0],
	output: test[1],
}))

describe("testing generate arrays", () => {
	it.each(tests)(
		"should generate an array in which every element is an array that goes from 1 to the index of that array",
		({ input, output }) => {
			expect(generateArrays(input)).toStrictEqual(output)
		}
	)
})
