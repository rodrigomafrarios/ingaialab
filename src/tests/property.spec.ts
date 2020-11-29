import { PropertyController } from '../presentation/controllers/property'
import { MissingParamError, ServerError } from '../presentation/errors'
import { SquareMeterValidator } from '../presentation/protocols'
import { PropertyModel } from '../domain/models/property'
import { CalcPropertyPrice } from '../domain/usecases/calc-property-price'

interface StubType {
	controllerStub: PropertyController
	squareMeterValidatorStub: SquareMeterValidator
	calcPropertyPriceStub: CalcPropertyPrice
}

const factorySquareMeterValidator = (): SquareMeterValidator => {
	class SquareMeterValidatorStub implements SquareMeterValidator {
		private readonly range = { min: 10, max: 10000 }
		isRangeValid (squareMeter: number): boolean {
			if (squareMeter < this.range.min || squareMeter > this.range.max) {
				return false
			}
			return true
		}
	}
	return new SquareMeterValidatorStub()
}
const factorycalcPropertyPrice = (): any => {
	class CalcPropertyPriceStub {
		private readonly price: number = 500
		async calc (property: PropertyModel): Promise<number> {
			return new Promise(resolve => resolve(property.squareMeters * this.price))
		}
	}
	return new CalcPropertyPriceStub()
}

const factoryController = (): StubType => {
	const squareMeterValidatorStub = factorySquareMeterValidator()
	const calcPropertyPriceStub = factorycalcPropertyPrice()
	const controllerStub = new PropertyController(squareMeterValidatorStub,calcPropertyPriceStub)
	return {
		controllerStub,
		squareMeterValidatorStub,
		calcPropertyPriceStub
	}
}

describe('PropertyController', () => {
	test('Should return 400 if no m² is provided', async () => {
		const factory = factoryController()
		const controller = factory.controllerStub
		const httpRequest = {
			body: {}
		}

		const httpResponse = await controller.handle(httpRequest)
		expect(httpResponse.statusCode).toBe(400)
		expect(httpResponse.body).toEqual(new MissingParamError('squareMeters'))
	})
	test('Should return 400 if m² out of range', async () => {
		const factory = factoryController()
		const controller = factory.controllerStub
		jest.spyOn(factorySquareMeterValidator(),'isRangeValid').mockReturnValueOnce(false)
		const httpRequest = {
			body: {
				squareMeters: 50000
			}
		}

		const httpResponse = await controller.handle(httpRequest)
		expect(httpResponse.statusCode).toBe(400)
	})
	test('Should return 500 if SquareMeterValidator throws', async () => {
		const { controllerStub, squareMeterValidatorStub } = factoryController()
		jest.spyOn(squareMeterValidatorStub, 'isRangeValid').mockImplementationOnce(() => {
			throw new Error()
		})
		const httpRequest = {
            body: {
				squareMeters: 50000
			}
        }

        const httpResponse = await controllerStub.handle(httpRequest)
		expect(httpResponse.statusCode).toBe(500)
		expect(httpResponse.body).toEqual(new ServerError())
	})
	test('Should call calcPropertyPrice with correct values', async () => {
		const { controllerStub, calcPropertyPriceStub } = factoryController()
		const calcSpy = jest.spyOn(calcPropertyPriceStub,'calc')
		const httpRequest = {
			body: {
				squareMeters: 2000
			}
		}

		await controllerStub.handle(httpRequest)
		expect(calcSpy).toHaveBeenCalledWith(httpRequest.body)
	})
	test('Should return 500 if calcPropertyPrice throws', async () => {
		const { controllerStub, calcPropertyPriceStub } = factoryController()
		jest.spyOn(calcPropertyPriceStub, 'calc').mockImplementationOnce(() => {
			throw new Error()
		})
		const httpRequest = {
            body: {
				squareMeters: 2000
			}
        }

        const httpResponse = await controllerStub.handle(httpRequest)
		expect(httpResponse.statusCode).toBe(500)
		expect(httpResponse.body).toEqual(new ServerError())
	})
	test('Should return 200 if valid data is provided', async () => {
		const factory = factoryController()
		const controller = factory.controllerStub
		const httpRequest = {
			body: {
				squareMeters: 2000
			}
		}

		const httpResponse = await controller.handle(httpRequest)
		expect(httpResponse.statusCode).toBe(200)
		expect(httpResponse.body).toEqual(httpRequest.body.squareMeters * 500)
	})
})
