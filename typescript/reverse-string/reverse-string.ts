class ReverseString {
	static reverse(string: string) {
		if (!string) {
			return string
		}
		let newReversedString = []
		for (let i = string.length; i >= 0; i--) {
			newReversedString.push(string[i])
		}
		return newReversedString.join('')
	}
}

export default ReverseString
