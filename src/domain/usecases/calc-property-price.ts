import { PropertyModel } from '../models/property'

export interface CalcPropertyPrice {
	calc: (property: PropertyModel) => number
}
