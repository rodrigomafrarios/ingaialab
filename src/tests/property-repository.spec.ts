import { MongoHelper } from '@Infra/db/helpers/mongo-helper'
import { PropertyDbRepository } from '@Infra/db/property-repository/property'

// describe('Property Mongo Repository', () => {
// 	beforeAll(async () => {
// 		await MongoHelper.connect('mongodb://0.0.0.0:27017/jest')
// 	})
// 	afterAll(async () => {
// 		await MongoHelper.disconnect()
// 	})
// })

describe('Property [DB] Repository', () => {
	test('Should return the cost of property on success', async () => {
		const sut = new PropertyDbRepository()
		await MongoHelper.connect('mongodb://0.0.0.0:27017/jest')
		const collection = MongoHelper.getCollection('prices')
		await collection.insertOne({
			value: 500
		})
		const property = {
			squareMeters: 500
		}
		const calc = await sut.calc({
			squareMeters: 500
		})

		expect(calc).toEqual(property.squareMeters * 500)
		await collection.drop()
		await MongoHelper.disconnect()
	})
})
