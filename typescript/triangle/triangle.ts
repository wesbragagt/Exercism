export default class Triangle {

    sides: number[]

    constructor(...sides: number[]) {
        this.sides = sides
    }

    kind() {
        if (this.checkForIlegalValues()) {
            throw new Error('Not a valid side')
        }

        if (this.checkForTriangleInequality()) {
            throw new Error('triangle inequality')
        }

        const uniqueValues = this.getUniqueValues()
        switch (uniqueValues.length) {
            case 1: return 'equilateral'
            case 2: return 'isosceles'
            case 3: return 'scalene'
        }
    }

    private checkForIlegalValues() {
        const findIlegalValues = this.sides.some(side => side <= 0)
        return findIlegalValues
    }

    // for any triangle, the sum of the lengths of any two sides must be greater than or equal to the length of the remaining side.
    private checkForTriangleInequality() {
        const [a, b, c] = this.sides
        // a + b > c
        const first = a + b >= c
        // a + c > b
        const second = a + c >= b
        // b + c > a
        const third = b + c >= a

        if (!first || !second || !third) {
            return true
        }
        return false
    }

    private getUniqueValues() {
        return [...new Set(this.sides)]
    }
}