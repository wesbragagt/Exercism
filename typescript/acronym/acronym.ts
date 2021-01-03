export default class Acronym {
  public static parse(phrase: string): string {
    const getFirstLetter = (str: string) => str.charAt(0) 

    return phrase.split(/[^A-Za-z]/g).map(getFirstLetter).join('').toUpperCase()
  }
}
