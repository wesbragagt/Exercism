export default class SpaceAge {
	public seconds: number
	private EARTH_SECONDS_IN_YEAR: number = 60 * 60 * 24 * 365.25
	private convertToPlanetYears: Function = (YEAR_RATIO: number) => {
		const result = this.onEarth() / YEAR_RATIO
		return parseFloat(result.toFixed(2))
	}
	private yearages = {
		Earth: 1,
		Mercury: 0.2408467,
		Venus: 0.61519726,
		Mars: 1.8808158,
		Jupiter: 11.862615,
		Saturn: 29.447498,
		Uranus: 84.016846,
		Neptune: 164.79132
	}
	constructor(seconds: number) {
		this.seconds = seconds
	}

	onEarth = (): number => {
		const years = this.seconds / this.EARTH_SECONDS_IN_YEAR
		return parseFloat(years.toFixed(2))
	}

	onMercury = () => this.convertToPlanetYears(this.yearages.Mercury)
	onVenus = () => this.convertToPlanetYears(this.yearages.Venus)
	onMars = () => this.convertToPlanetYears(this.yearages.Mars)
	onJupiter = () => this.convertToPlanetYears(this.yearages.Jupiter)
	onSaturn = () => this.convertToPlanetYears(this.yearages.Saturn)
	onUranus = () => this.convertToPlanetYears(this.yearages.Uranus)
	onNeptune = () => this.convertToPlanetYears(this.yearages.Neptune)
}
