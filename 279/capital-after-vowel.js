const vowels = "aeiou"
const consonants = "bcdfghjklmnpqrstvwxyz"

const capitalAfterVowel = (str) => {
	let capitalizeNextChar = false
	const transformedString = Array.from(str)
		.map((char) => {
			if (vowels.includes(char)) {
				capitalizeNextChar = true
				return char
			} else {
				if (capitalizeNextChar && consonants.includes(char)) {
					capitalizeNextChar = false
					return char.toUpperCase()
				} else {
					return char
				}
			}
		})
		.join("")

	return transformedString
}

module.exports = capitalAfterVowel
