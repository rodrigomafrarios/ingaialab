import { CalcPropertyPriceRepository } from '@Data/protocols/calc-property-price-repository'
import { PropertyModel } from '@Data/usecases/calc-property-price/db-calc-property-price-protocols'
import { MongoHelper } from '@Infra/db/helpers/mongo-helper'

export class PropertyDbRepository implements CalcPropertyPriceRepository {
	private readonly calcPropertyPriceRepository: CalcPropertyPriceRepository
	async calc (property: PropertyModel): Promise<number> {
		const propertyCollection = MongoHelper.getCollection('prices')
		const result = await propertyCollection.findOne({})
		return result.value
	}
}
