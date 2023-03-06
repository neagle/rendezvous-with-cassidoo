const scramble = (str) => {
	return (
		str
			// Split the string into an array by its letter groups, preserving the separating strings
			.split(/([^A-Za-z])/)
			// Iterate through each word
			.map((word) => {
				// Check whether the string is a word, since the array will be a mix of
				// letter sequences and punctuation / spaces.
				const isWord = /^[A-Za-z]*$/.test(word)

				return isWord && word.length > 3
					? word
							// Split the word into an array with the first, middle, and last letters separated
							.split(/(^[A-Za-z]|[A-Za-z]$)/)
							// Drop the empty first/last values
							.filter(Boolean)
							.map((letters, i) =>
								i === 1
									? // Randomly sort the middle array of letters using a coin flip. Good
									  // randomization is, of course, harder than this, but this is good
									  // enough for this case.
									  letters
											.split("")
											.sort(() => (Math.random() > 0.5 ? 1 : -1))
											.join("")
									: letters
							)
							.join("")
					: // For punctuation and spaces, don't do anything
					  word
			})
			.join("")
	)
}

const inputs = [
	"The quick brown fox jumped over the lazy dog.",
	"I came, I saw, I conquered.",
	"To sit in solemn silence in a dull dark dock in a pestilential prison with a lifelong lock.",
	"I am the very model of a modern major general.",
	"The school board is EXTREMELY disappointed in you, Thomas!",
]

inputs.forEach((input) => {
	console.log("input", input)
	console.log("scramble(input)", scramble(input))
})

module.exports = scramble
