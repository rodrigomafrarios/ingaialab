import { PropertyModel } from '@Domain/models/property'

export interface CalcPropertyPrice {
	calc: (property: PropertyModel) => Promise<number>
}
