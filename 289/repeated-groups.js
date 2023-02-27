// Given a list of numbers, return all groups of repeating consecutive numbers.

const repeatedGroups = (list) => {
	return list.reduce((acc, num, index) => {
		const lastNum = list[index - 1]
		if (num === lastNum) {
			const lastArray = acc.at(-1)
			if (Array.isArray(lastArray) && lastArray[0] === num) {
				lastArray.push(num)
			} else {
				// The first time we create an array of consecutive numbers, we need to
				// include both the first occurrence and the current one
				acc.push([num, num])
			}
		}

		return acc
	}, [])
}

module.exports = repeatedGroups
