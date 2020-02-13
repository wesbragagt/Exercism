class AtbashCipher {
	public encode = (string: string) => {
		const newCipherString = this.mapToCipherObj(string)
		return this.insertSpacesEvery5Characters(newCipherString, 5).join(' ')
	}

	public decode = (string: string) => {
		const removeSpacesEvery5Characters = input => this.insertSpacesEvery5Characters(input, 5).join('')
		return this.pipe(removeSpacesEvery5Characters, this.mapToCipherObj)(string)
	}

	private pipe = (...func: any) => input => func.reduce((arg, func) => func(arg), input)

	private createCipherMapping = string => {
		const splitString = string => string.split('')
		const reverseArr = arr => arr.reverse()
		const mapLetterWithCypher = arr =>
			arr.reduce((acc, cur, i) => ({ ...acc, [cur]: arr[arr.length - (i + 1)] }), {})

		return this.pipe(splitString, reverseArr, mapLetterWithCypher)(string)
	}

	private mapToCipherObj = string => {
		const cipherObj = this.createCipherMapping('abcdefghijklmnopqrstuvwxyz')
		const cipherLetterArr = string
			.toLowerCase()
			.replace(/\s/g, '')
			.split('')
			.map(e => {
				if (!isNaN(e)) {
					return e
				}
				return cipherObj[e]
			})
		return cipherLetterArr.join('')
	}

	private insertSpacesEvery5Characters = (str, n) => {
		var newArr = []

		for (let i = 0; i < str.length; i += n) {
			newArr.push(str.substr(i, n))
		}

		return newArr
	}
}

export default AtbashCipher
