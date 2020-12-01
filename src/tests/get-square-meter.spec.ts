import { GetSquareMeterRepository } from '@Data/protocols/get-square-meters-repository'
import { DbGetSquareMeters } from '@Data/usecases/get-square-meters/db-get-square-meters'

interface SutTypes {
	sut: DbGetSquareMeters
	getSquareMeterRepositoryStub: GetSquareMeterRepository
}

const factorySquareMeterRepository = (): GetSquareMeterRepository => {
    class GetSquareMeterRepositoryStub implements GetSquareMeterRepository {
        private readonly squareMeters = 200
        async get (): Promise<number> {
            return new Promise(resolve => resolve(this.squareMeters))
        }
    }
    return new GetSquareMeterRepositoryStub()
}

const factory = (): SutTypes => {
    const getSquareMeterRepositoryStub = factorySquareMeterRepository()
    const sut = new DbGetSquareMeters(getSquareMeterRepositoryStub)
    return { sut, getSquareMeterRepositoryStub }
}

describe('DbGetSquareMeters', () => {
    test('Should return m² on success', async () => {
        const { sut } = factory()
		const squareMeters = await sut.get()
		expect(squareMeters).toEqual(200)
    })
})
