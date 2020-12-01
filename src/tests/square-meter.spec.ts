import { SquareMeterController } from '@Presentation/controllers/square-meter'
import { GetSquareMeter } from '@Domain/usecases/get-square-meter'
import { ServerError } from '@Presentation/errors/server-error'

interface StubType {
	controllerStub: SquareMeterController
	factorySquareMeterStub: GetSquareMeter
}

const factorySquareMeter = (): any => {
    class GetSquareMeterStub implements GetSquareMeter {
        private readonly squareMeters = 200
        async get (): Promise<number> {
            return new Promise(resolve => resolve(this.squareMeters))
        }
    }

    return new GetSquareMeterStub()
}
const factoryController = (): StubType => {
    const factorySquareMeterStub = factorySquareMeter()
    const controllerStub = new SquareMeterController(factorySquareMeterStub)

    return { factorySquareMeterStub, controllerStub }
}

describe('SquareMeterController', () => {
    test('Should SquareMeterController.handle returns m²', async () => {
        const { factorySquareMeterStub, controllerStub } = factoryController()
        jest.spyOn(factorySquareMeterStub,'get')
        const httpRequest = {}
        const httpResponse = await controllerStub.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(200)
    })
    test('Should SquareMeterController.handle returns 500 if throws', async () => {
        const { factorySquareMeterStub, controllerStub } = factoryController()
        jest.spyOn(factorySquareMeterStub,'get').mockImplementationOnce(() => {
            throw new Error()
        })
        const httpRequest = {}
        const httpResponse = await controllerStub.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(500)
        expect(httpResponse.body).toEqual(new ServerError())
    })
})
