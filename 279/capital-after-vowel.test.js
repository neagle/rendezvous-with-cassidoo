const capitalAfterVowel = require("./capital-after-vowel.js")

const inputs = [
	["hello world", "heLlo WoRld"],
	["xaabeuekadii", "xaaBeueKaDii"],
]

const tests = inputs.map((test) => ({
	input: test[0],
	output: test[1],
}))

describe("testing capital after vowel", () => {
	it.each(tests)(
		"should return a string with capital letters after vowels",
		({ input, output }) => {
			expect(capitalAfterVowel(input)).toStrictEqual(output)
		}
	)
})
