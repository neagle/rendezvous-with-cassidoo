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
							// i.e. 'string' -> ['s', 'trin', 'g']
							.split(/(^[A-Za-z]|[A-Za-z]$)/)
							// Drop the empty first/last values
							.filter(Boolean)
							.map((letters, i) =>
								i === 1
									? letters
											.split("")
											// Scramble the interior letters using an inline
											// implementation of the Fisher-Yates Shuffle
											.reduce((scrambled, letter, index, original) => {
												if (Array.isArray(scrambled)) {
													scrambled = { arr: [], hat: [...original] }
												}

												const pick = Math.floor(
													Math.random() * scrambled.hat.length
												)

												scrambled.arr.push(...scrambled.hat.splice(pick, 1))

												return scrambled.hat.length ? scrambled : scrambled.arr
											}, [])
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
	// console.log("input", input)
	// console.log("scramble(input)", scramble(input))
})

module.exports = scramble
