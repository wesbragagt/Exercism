function pipe(...fns: Function[]) {
  return (input: any) =>
    fns.reduce((output: any, fn: Function) => fn(output), input);
}

export function toRoman(digit: number) {
  const romanMatrix: Record<string, number> = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  return Object.entries(romanMatrix).reduce((output, [romanNumeral, value]) => {
    while(digit >= value){
      digit -= value
      output += romanNumeral
    }
    return output
  }, '')
}
