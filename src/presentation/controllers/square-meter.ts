import { Controller } from '@Presentation/protocols/controller'
import { HttpRequest, HttpResponse } from '@Presentation/protocols/http'
import { GetSquareMeter } from '@Domain/usecases/get-square-meter'

export class SquareMeterController implements Controller {
    private readonly getSquareMeter: GetSquareMeter
    constructor (getSquareMeter: GetSquareMeter) {
        this.getSquareMeter = getSquareMeter
    }

    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        const results = await this.getSquareMeter.get()

        return new Promise(resolve => resolve({
            statusCode: 200,
            body: results
        }))
    }
}
