import { PropertyModel } from '@Data/usecases/calc-property-price/db-calc-property-price-protocols'
export interface CalcPropertyPriceRepository {
	calc: (property: PropertyModel) => Promise<number>
}
