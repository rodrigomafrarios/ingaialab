import { SquareMeterController } from '@Presentation/controllers/square-meter'
import { SquareMetersDbRepository } from '@Infra/db/square-meters-repository/square-meters'
import { DbGetSquareMeters } from '@Data/usecases/get-square-meters/db-get-square-meters'

export const factorySquareMetersController = (): SquareMeterController => {
    const getSquareMeters = new SquareMetersDbRepository()
	const squareMetersDbRepository = new DbGetSquareMeters(getSquareMeters)
	const squareMetersController = new SquareMeterController(squareMetersDbRepository)
	return squareMetersController
}
