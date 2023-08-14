// You have a faulty keyboard. Whenever you type a vowel on it (a,e,i,o,u,y), it
// reverses the string that you have written, instead of typing the character.
// Typing other characters works as expected. Given a string, return what will
// be on the screen after typing with your faulty keyboard.

const faultyKeeb = (str) => {
	const vowels = ["a", "e", "i", "o", "u", "y"]
	return str
		.split("")
		.reduce((result, char) => {
			return vowels.includes(char) ? result.reverse() : [...result, char]
		}, "")
		.join("")
}

module.exports = faultyKeeb
