const combineStrings = (arr, maxLength) => {
	const result = [];
	// Keep the current run in an array so that we don't need to use
	// conditionals to know whether to add a space or not.
	let current = [];

	arr.forEach((item, i) => {
		const currentString = current.join(" ");
		// Check whether the current run *would* exceed the maxLength
		// if the current item (plus a space) were added to it.
		if (currentString.length + item.length + 1 > maxLength) {
			// If so, put the current string in the result array
			result.push(currentString);
			// And reset the current run
			current = [];
		}

		current.push(item);
	});

	// Take the last run and push it to the result array
	if (current.length) {
		result.push(current.join(" "));
	}

	return result;
}

module.exports = combineStrings;
