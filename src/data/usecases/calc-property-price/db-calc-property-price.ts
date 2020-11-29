import { CalcPropertyPrice, PropertyModel } from './db-calc-property-price-protocols'

export class DbCalcPropertyPrice implements CalcPropertyPrice {
	private readonly price: number = 500
	async calc (property: PropertyModel): Promise<number> {
		return new Promise(resolve => resolve(property.squareMeters * this.price))
	}

}