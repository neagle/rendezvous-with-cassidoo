/* You are given a list of positive integers which represents some range of
 * integers which has been truncated. Find the missing bits, insert ellipses to
 * show that that part has been truncated, and print it. If the consecutive
 * values differ by exactly two, then insert the missing value. */

const MAX_DIFFERENCE = 2

const missingBits = (sequence) => {
	const result = sequence.reduce((result, currentItem) => {
		const difference = currentItem - result.at(-1)

		if (difference <= MAX_DIFFERENCE) {
			// Fill in the numbers in between
			for (let i = result.at(-1) + 1; i < currentItem; i += 1) {
				result.push(i)
			}
		} else if (difference > MAX_DIFFERENCE) {
			result.push("...")
		}

		result.push(currentItem)
		return result
	}, [])

	return `[${String(result)}]`
}

module.exports = missingBits
