import { PropertyModel } from '../../data/usecases/calc-property-price/db-calc-property-price-protocols'
export interface CalcPropertyPriceRepository {
	calc: (property: PropertyModel) => Promise<number>
}