const sumEveryOther = (num) => {
	const str = String(num)

	const sum = str
		.split("")
		// Toss out anything that's not a number
		.filter((char) => /[0-9]/.test(char))
		// Sum up every other number (all the odds)
		.reduce((acc, curr, i) => {
			if (i % 2 === 1) {
				return acc + Number(curr)
			}
			return acc
		}, 0)

	return sum
}

module.exports = sumEveryOther
