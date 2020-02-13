class Transcriptor {
	toRna(dnaString: string): string {
		let rnaString: any = dnaString
			.toUpperCase()
			.split('')
			.map(e => {
				switch (e) {
					case 'G':
						return 'C'
					case 'C':
						return 'G'
					case 'T':
						return 'A'
					case 'A':
						return 'U'
					default:
						throw new Error('Invalid input DNA.')
				}
			})
		return rnaString.join('')
	}
}

export default Transcriptor
