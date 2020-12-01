import { MongoHelper } from '@Infra/db/helpers/mongo-helper'
import { SquareMetersDbRepository } from '@Infra/db/square-meters-repository/square-meters'

// describe('Property Mongo Repository', () => {
// 	beforeAll(async () => {
// 		await MongoHelper.connect('mongodb://0.0.0.0:27017/jest')
// 	})
// 	afterAll(async () => {
// 		await MongoHelper.disconnect()
// 	})
// })

describe('SquareMeters [DB] Repository', () => {
	test('Should return the cost of m² on success', async () => {
		await MongoHelper.connect('mongodb://0.0.0.0:27017/jest')
		const collection = MongoHelper.getCollection('prices')
		await collection.insertOne({
			value: 500
		})

		const sut = new SquareMetersDbRepository()
		const squareMeters = await sut.get()

		expect(squareMeters).toEqual(500)
		await collection.drop()
		await MongoHelper.disconnect()
	})
})
