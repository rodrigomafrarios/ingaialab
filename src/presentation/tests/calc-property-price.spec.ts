import { PropertyModel, DbCalcPropertyPrice } from '../../data/usecases/calc-property-price/db-calc-property-price-protocols'

describe('DbCalcPropertyPrice', () => {
	test('Should call DbCalcPropertyPrice.calc with correct values', async () => {
		
		const property: PropertyModel = {
			squareMeters: 500
		}

		const model = new DbCalcPropertyPrice()
		const results = await model.calc(property)

		expect(results).toBeGreaterThan(0)
		//expect(calcSpy).toHaveBeenCalledWith(property)

	})

})