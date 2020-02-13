class Pangram {
	private sentence: string

	constructor(sentence: string) {
		this.sentence = sentence
	}

	isPangram = (text: string = this.sentence): Boolean => {
		// check for empty strings and nulls
		if (!text) {
			return false
		}
		// parse the sentence to remove numbers and spaces
		text = text.toLowerCase().replace(/\s|\d|/g, '')
		const arrLetters = text.match(/[a-zA-Z]/g)
		const getUniqueLettersArr = [...new Set(arrLetters)]

		const countUniqueLetters = getUniqueLettersArr.length

		return countUniqueLetters === 26
	}
}

export default Pangram
