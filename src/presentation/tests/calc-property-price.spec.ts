import { PropertyModel, DbCalcPropertyPrice, CalcPropertyPriceRepository } from '../../data/usecases/calc-property-price/db-calc-property-price-protocols'

interface SutTypes {
	sut: DbCalcPropertyPrice
	calcPropertyPriceRepositoryStub: CalcPropertyPriceRepository
}

const factory = (): SutTypes => {
	const calcPropertyPriceRepositoryStub = factoryCalcPropertyPriceRepository()
	const sut = new DbCalcPropertyPrice(calcPropertyPriceRepositoryStub)
	return {
		sut,
		calcPropertyPriceRepositoryStub
	}
}
const factoryCalcPropertyPriceRepository = (): CalcPropertyPriceRepository => {
	class CalcPropertyPriceRepositoryStub implements CalcPropertyPriceRepository {
		private readonly price: number = 500
		async calc (property: PropertyModel): Promise<number> {
			return new Promise(resolve => resolve(property.squareMeters * this.price))
		}
	}

	return new CalcPropertyPriceRepositoryStub()
}

describe('DbCalcPropertyPrice', () => {
	test('Should call CalcPropertyPriceRepository with correct values', async () => {
		
		const { sut, calcPropertyPriceRepositoryStub } = factory()
		const calcSpy = jest.spyOn(calcPropertyPriceRepositoryStub, 'calc')
		const property = {
			squareMeters: 500
		}

		await sut.calc(property)
		expect(calcSpy).toHaveBeenCalledWith({squareMeters: 500})

	})

})