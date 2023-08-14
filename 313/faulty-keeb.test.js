const faultyKeeb = require("./faulty-keeb.js")

const inputs = [
	["string", "rtsng"],
	["hello world!", "w hllrld!"],
]

const tests = inputs.map((test) => ({
	input: test[0],
	output: test[1],
}))

describe("testing faultyKeeb", () => {
	it.each(tests)(
		"should correctly anticipate faulty keyboard output",
		({ input, output }) => {
			expect(faultyKeeb(input)).toStrictEqual(output)
		}
	)
})
