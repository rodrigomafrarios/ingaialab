import { CalcPropertyPrice, PropertyModel, CalcPropertyPriceRepository } from './db-calc-property-price-protocols'

export class DbCalcPropertyPrice implements CalcPropertyPrice {
	private readonly price: number = 500
	private readonly calcPropertyPriceRepository: CalcPropertyPriceRepository
	constructor (calcPropertyPriceRepository: CalcPropertyPriceRepository) {
		this.calcPropertyPriceRepository = calcPropertyPriceRepository
	}

	async calc (property: PropertyModel): Promise<number> {
		const result = await this.calcPropertyPriceRepository.calc(property)
		return result
	}
}
