import { MongoHelper } from '../infra/db/helpers/mongo-helper'
import { PropertyDbRepository } from '../infra/db/property-repository/property'

// describe('Property Mongo Repository', () => {
// 	beforeAll(async () => {
// 		await MongoHelper.connect('mongodb://0.0.0.0:27017/jest')
// 	})
// 	afterAll(async () => {
// 		await MongoHelper.disconnect()
// 	})
// })

describe('Property [DB] Repository', () => {
	test('Should return the cost of property on sucess', async () => {
		await MongoHelper.connect('mongodb://0.0.0.0:27017/jest')
		const collection = MongoHelper.getCollection('prices')
		await collection.insertOne({
			value: 500
		})

		const sut = new PropertyDbRepository()
		const property = {
			squareMeters: 500
		}
		const price = await sut.calc({
			squareMeters: 500
		})

		expect((price * property.squareMeters)).toEqual(property.squareMeters * 500)
		await collection.drop()
		await MongoHelper.disconnect()
	})
})
