const scramble = (str) => {
	return (
		str
			// Split the string into an array by its letter groups, preserving the separating strings
			.split(/([^A-Za-z])/)
			// Iterate through each word
			.map((word) => {
				// Create a register to preserve a record of which letters were originally capitalized.
				// We want "The" to turn into "Het", not "heT", since the intention is
				// to have scrambled words that still read like English. It will also
				// preserve things that are in all caps in case one wants to write words
				// that are EMPHASIZED!
				const originalCapitalization = []

				// Check whether the string is a word, since the array will be a mix of
				// letter sequences and punctuation / spaces.
				const isWord = /^[A-Za-z]*$/.test(word)

				return isWord
					? word
							.split("")
							.map((letter) => {
								// Save whether the original letter in this slot is capitalized
								originalCapitalization.push(/[A-Z]/.test(letter))
								return letter
							})
							// Randomly sort the array of letters using a coin flip. Good
							// randomization is, of course, harder than this, but this is good
							// enough for this case.
							.sort((a, b) => (Math.random() > 0.5 ? 1 : -1))
							// Apply the original capitalization sequence to the newly scrambled word
							.map((letter, i) =>
								originalCapitalization[i]
									? letter.toUpperCase()
									: letter.toLowerCase()
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
]

// inputs.forEach((input) => {
// 	console.log("input", input)
// 	console.log("scramble(input)", scramble(input))
// })

module.exports = scramble
