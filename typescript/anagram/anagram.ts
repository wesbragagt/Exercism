export default class anagram{
    subject: string
    constructor(subject: string){
        this.subject = subject
    }

    matches(...args: any){
      console.log(args)
        return args.filter((value: string) => {
          return this.sortWord(value).toLowerCase() === this.sortWord(this.subject).toLowerCase()
        })
    }
  
  private sortWord(word: string){
    return word.split('').sort().join('')
  }

}