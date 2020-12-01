import { Controller } from '@Presentation/protocols/controller'
import { HttpRequest, HttpResponse } from '@Presentation/protocols/http'
import { GetSquareMeter } from '@Domain/usecases/get-square-meter'
import { ok, serverError } from '@Presentation/helpers/http-helper'

export class SquareMeterController implements Controller {
    private readonly getSquareMeter: GetSquareMeter
    constructor (getSquareMeter: GetSquareMeter) {
        this.getSquareMeter = getSquareMeter
    }

    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const results = await this.getSquareMeter.get()
            return ok(results)
        } catch {
            return serverError()
        }
    }
}
