export default class Gigasecond {
    // grab the date passed
    // convert the date passed to unix timestamp for calculation 
    // convert the gigasecond to a unix timestamp equivalent 
    // add both together
    // convert result to a valid date format
    public startDate: Date
    public constructor(startDate: Date) {
        this.startDate = startDate
    }
    date() {
        const GIGASECOND: Date = new Date(Math.pow(10, 9) / 1000)
        const result: number = this.toUnix(this.startDate) + this.toUnix(GIGASECOND)
        return this.toDateFormat(result)
    }
    private toUnix(date: Date) {
        return date.getTime() / 1000
    }
    private toDateFormat(unix: number) {
        return new Date(unix * 1000)
    }
}