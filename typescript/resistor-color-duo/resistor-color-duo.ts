export class ResistorColor {
	private colors: string[]
	// Black - Brown - Red - Orange - Yellow - Green - Blue - Violet - Grey - White
	constructor(colors: string[]) {
		if (colors.length === 1) {
			throw 'At least two colors need to be present'
		}
		this.colors = colors
	}

	value = (): number => {
		let colorOptions = [
			'Black',
			'Brown',
			'Red',
			'Orange',
			'Yellow',
			'Green',
			'Blue',
			'Violet',
			'Grey',
			'White'
		].map(e => e.toLowerCase())
		const valuesToCheck = this.colors.splice(0, 2)
		const accumulatedValues = valuesToCheck.reduce((acc, curr) => {
			acc += colorOptions.indexOf(curr)
			return acc
		}, '')
		return Number(accumulatedValues)
	}
}
