const _ = require('lodash')
export default class BinarySearch {
	public array: any
	constructor(array: any) {
		let isSorted
		for (let i = 0; i < array.length; i++) {
			if (array[i] > array[i + 1]) {
				isSorted = false
				break
			} else {
				isSorted = true
			}
		}
		if (isSorted) {
			this.array = array
			return
		} else {
			this.array = undefined
			return
		}
	}
	indexOf = (num: number) => _.sortedIndexOf(this.array, num)
}
