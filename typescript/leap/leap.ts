function isLeapYear(year: number) {
	// Your code here
	// except every year that is evenly divisible by 100 unless the year is       also evenly divisible by 400
	const divideByHundred = year / 100
	const divideByFourHundred = year / 400
	if (isEven(divideByHundred) && isEven(divideByFourHundred)) {
		console.log(`${year} is leap year`)
		return true
	}
	// on every year that is evenly divisible by 4
	const divideByFour = year / 4
	if (isEven(divideByFour)) {
		console.log(`${year} is leap year`)
		return true
	} else {
		console.log(`${year} is not a leap year`)
		return false
	}
	//check if a number is even or odd
	function isEven(value: number) {
		if (value % 2 === 0) {
			return true
		} else {
			return false
		}
	}
}

export default isLeapYear
