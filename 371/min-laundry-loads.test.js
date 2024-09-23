const minLaundryLoads = require("./min-laundry-loads.js")

const inputs = [
	[
		[
			["red", "normal"],
			["blue", "normal"],
			["red", "delicate"],
			["blue", "heavy"],
		],
		3,
	],
	[
		[
			["white", "normal"],
			["white", "delicate"],
			["white", "normal"],
			["white", "heavy"],
		],
		2,
	],
]

const tests = inputs.map(([input, output]) => ({
	input,
	output,
}))

describe("testing minLaundryLoads", () => {
	it.each(tests)(
		"should correctly state the minimum number of loads",
		({ input, output }) => {
			expect(minLaundryLoads(input)).toStrictEqual(output)
		}
	)
})
