import { GetSquareMeterRepository } from '@Data/protocols/get-square-meters-repository'
import { MongoHelper } from '@Infra/db/helpers/mongo-helper'

export class SquareMetersDbRepository implements GetSquareMeterRepository {
    async get (): Promise<number> {
        const pricesCollection = MongoHelper.getCollection('prices')
		const result = await pricesCollection.findOne({})
		return result.value
    }
}
