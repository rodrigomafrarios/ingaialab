import { HttpRequest, HttpResponse, Controller, SquareMeterValidator } from '@Presentation/protocols'
import { MissingParamError, InvalidParamError } from '@Presentation/errors'
import { badRequest, serverError, ok } from '@Presentation/helpers/http-helper'
import { CalcPropertyPrice } from '@Domain/usecases/calc-property-price'

export class PropertyController implements Controller {
	private readonly squareMeterValidator: SquareMeterValidator
	private readonly calcPropertyPrice: CalcPropertyPrice
	constructor (squareMeterValidator: SquareMeterValidator, calcPropertyPrice: CalcPropertyPrice) {
		this.squareMeterValidator = squareMeterValidator
		this.calcPropertyPrice = calcPropertyPrice
	}

	async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const requiredFields = ['squareMeters']
			for (const field of requiredFields) {
				if (!httpRequest.body[field]) {
					return badRequest(new MissingParamError(field))
				}
			}
			const isRangeValid = this.squareMeterValidator.isRangeValid(httpRequest.body.squareMeters)
			if (!isRangeValid) {
				return badRequest(new InvalidParamError('squareMeters'))
			}
			const calc = await this.calcPropertyPrice.calc({
				squareMeters: httpRequest.body.squareMeters
			})

			return ok(calc)
		} catch {
			return serverError()
		}
	}
}
