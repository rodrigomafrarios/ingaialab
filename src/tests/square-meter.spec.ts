import { SquareMeterController } from '@Presentation/controllers/square-meter'
import { GetSquareMeter } from '@Domain/usecases/get-square-meter'

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
        spyOn(factorySquareMeterStub,'get')
        const httpRequest = {}
        const httpResponse = await controllerStub.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(200)
    })
})
