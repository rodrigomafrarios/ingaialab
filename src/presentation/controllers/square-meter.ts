import { Controller } from '@Presentation/protocols/controller'
import { HttpRequest, HttpResponse } from '@Presentation/protocols/http'
import { GetSquareMeters } from '@Domain/usecases/get-square-meters'
import { ok, serverError } from '@Presentation/helpers/http-helper'

export class SquareMeterController implements Controller {
    private readonly getSquareMeters: GetSquareMeters
    constructor (getSquareMeters: GetSquareMeters) {
        this.getSquareMeters = getSquareMeters
    }

    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const results = await this.getSquareMeters.get()
            return ok(results)
        } catch {
            return serverError()
        }
    }
}
