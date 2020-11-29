import { CalcPropertyPriceRepository } from '../../../data/protocols/calc-property-price-repository'
import { PropertyModel } from '../../../data/usecases/calc-property-price/db-calc-property-price-protocols'
import { MongoHelper } from '../helpers/mongo-helper'

export class PropertyDbRepository implements CalcPropertyPriceRepository {
	private readonly calcPropertyPriceRepository: CalcPropertyPriceRepository
	async calc (property: PropertyModel): Promise<number> {
		const propertyCollection = MongoHelper.getCollection('prices')
		const result = await propertyCollection.findOne({ value: property.squareMeters })
		return result.value
	}
}
