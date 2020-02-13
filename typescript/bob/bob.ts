class Bob {
	hey(phrase: any): string {
		if (this.silence(phrase)) {
			return 'Fine. Be that way!'
		}
		if (this.isShouting(phrase) || this.shoutingNoExclamation(phrase)) {
			return 'Whoa, chill out!'
		}
		if (this.askingQuestion(phrase)) {
			return 'Sure.'
		}

		return 'Whatever.'
	}
	private silence(input: string) {
		return input.trim() == ''
	}
	private isShouting(input: string) {
		return input.trim().charAt(input.length - 1) === '!' && input === input.toUpperCase()
	}
	private shoutingNoExclamation(input: string) {
		return input === input.toUpperCase()
	}
	private askingQuestion(input: string) {
		return input.trim().charAt(input.length - 1) === '?'
	}
}

export default Bob
