export default class Raindrop {
    convert(numberValue: number): String {
        const factorsOfNumber = this.getFactors(numberValue)
        let factorConvertion: any = []
        for (let i of factorsOfNumber) {
            let factor = factorsOfNumber[i]
            switch (true) {
                case numberValue === 1: factorConvertion = [1]
                    break
                case factor === 3: factorConvertion.push('Pling')
                    break
                case factor === 5: factorConvertion.push('Plang')
                    break
                case factor === 7: factorConvertion.push('Plong')
                    break
                default: factorConvertion = [factor]
            }
        }
        return factorConvertion.join('')
    }

    private getFactors(numberValue: number): number[] {
        let factors = [1]
        for (let i = 2; i < numberValue; i++) {
            if (numberValue % i === 0) {
                factors.push(i)
            }
        }
        factors.push(numberValue)
        return factors
    }
}