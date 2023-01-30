/* Given a positive integer, generate an array in which every element is an array
 * that goes from 1 to the index of that array. */

// This was my first attempt
const generateArrays1 = (int) => {
	const containerArray = []
	for (let i = 1; i <= int; i += 1) {
		const array = []
		for (let j = 1; j <= i; j += 1) {
			array.push(j)
		}
		containerArray.push(array)
	}
	return containerArray
}

// This was my second attempt, where I tried to avoid O(n²) complexity
// jsbench.me shows a significant improvement over the first version
const generateArrays = (int) => {
	const resultArray = []

	// Generate a master array that is the largest one we will use for our result
	// set
	const masterArray = []
	for (let i = 1; i <= int; i += 1) {
		masterArray.push(i)
	}

	// Go through each integer, and grab a subset of a copy of the master array
	// with which to populate the result array
	for (i = 1; i <= int; i += 1) {
		const newArray = [...masterArray].splice(0, i)
		resultArray.push(newArray)
	}

	return resultArray
}

module.exports = generateArrays
