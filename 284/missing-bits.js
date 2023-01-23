/* You are given a list of positive integers which represents some range of
 * integers which has been truncated. Find the missing bits, insert ellipses to
 * show that that part has been truncated, and print it. If the consecutive
 * values differ by exactly two, then insert the missing value. */

const missingBits = (sequence) => {
	const result = sequence.reduce((result, currentItem) => {
		const difference = currentItem - result.at(-1)

		if (difference === 2) {
			// Fill in the correct number
			result.push(currentItem - 1)
		} else if (difference > 2) {
			result.push("...")
		}

		result.push(currentItem)
		return result
	}, [])

	return `[${String(result)}]`
}

module.exports = missingBits