import { CalcPropertyPriceRepository } from '@Data/protocols/calc-property-price-repository'
import { PropertyModel } from '@Data/usecases/calc-property-price/db-calc-property-price-protocols'
import axios from 'axios'
import env from '@Main/config/env'
export class PropertyDbRepository implements CalcPropertyPriceRepository {
	private readonly calcPropertyPriceRepository: CalcPropertyPriceRepository
	private squareMetersCost: number
	constructor () {
		this.get()
	}

	async calc (property: PropertyModel): Promise<number> {
		return property.squareMeters * this.squareMetersCost
	}

	get (): any {
		const url = env.baseURL + '/api/property/square-meters'
		return axios.get(url).then((response) => {
			this.set(response.data)
		})
	}

	private set (value: number): void {
		this.squareMetersCost = value
	}
}
