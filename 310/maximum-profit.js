const maximumProfit = (arr) => {
	let max = 0
	for (let i = 0; i < arr.length - 1; i += 1) {
		for (let j = i + 1; j < arr.length; j += 1) {
			max = Math.max(max, arr[j] - arr[i])
		}
	}
	return max
}

module.exports = maximumProfit
