export default class Raindrop{
    convert(number: Number): String{
        return `${number}`
    }
    private type(number: Number) : String {
        if(number % 2 === 0){
            return 'even'
        } else {
            return 'odd'
        }
    }
    private getFactors(number: Number) : number[]{
        const divide = (a, b) => a * b
        const prefill = (fn, value) => input => fn(input, value)
        const divideBy2 = prefill(divide, 2)
        
    }
}