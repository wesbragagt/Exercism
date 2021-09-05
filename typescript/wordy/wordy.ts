/* eslint-disable */
export const answer = (question = '') => {
  if(question){
    const formattedQuestion = question.replace('?', '')
    const words = formattedQuestion.split(' ')
    const makeCalculation = (fn: (number1: number, number2: number) => number) => (number1: number, number2: number) => fn(number1,number2)
    const operatorsMap: any= {
      plus: makeCalculation((number1,number2) => {
        return number1 + number2
      }),
      minus: makeCalculation((number1,number2) => (number1 -= number2)),
      multiplied: makeCalculation((number1,number2) => (number1 *=number2)),
      divided: makeCalculation((number1,number2) => (number1 /=number2))
    }
    const operators = Object.keys(operatorsMap)
    const numbers = words.filter(word => word.match(/\d+/)).map(stringNumber => Number(stringNumber))
    if(numbers.length === 1){
      return numbers[0]
    }
    const operation = words.find(word => operators.includes(word))
    if(operation){
      return operatorsMap[operation](...numbers)
    }

  }
}
