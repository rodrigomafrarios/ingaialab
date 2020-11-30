import { PropertyController } from '@Presentation/controllers/property'
import { SquareMeterValidatorAdapter } from '@Utils/square-meter-validator'
import { DbCalcPropertyPrice } from '@Data/usecases/calc-property-price/db-calc-property-price'
import { PropertyDbRepository } from '@Infra/db/property-repository/property'

export const factoryPropertyController = (): PropertyController => {
	const squareMeterValidator = new SquareMeterValidatorAdapter()
	const propertyDbRepository = new PropertyDbRepository()
	const dbCalcPropertyPrice = new DbCalcPropertyPrice(propertyDbRepository)
	const propertyController = new PropertyController(squareMeterValidator,dbCalcPropertyPrice)
	return propertyController
}
