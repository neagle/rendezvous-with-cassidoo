/* Given a string of parenthesis, return the number of parenthesis you need to
 * add to the string in order for it to be balanced. */

const numChars = (str, char) => {
	return str.match(new RegExp(char, "g"))?.length || 0
}

const numBalanced = (str) => {
	return Math.abs(numChars(str, "\\(") - numChars(str, "\\)"))
}

module.exports = numBalanced
