import { GetSquareMeterRepository } from "@Data/protocols/get-square-meters-repository"
import { GetSquareMeters } from "@Domain/usecases/get-square-meters"

export class DbGetSquareMeters implements GetSquareMeters {
	private readonly getSquareMeterRepository: GetSquareMeterRepository
	constructor (getSquareMeterRepository: GetSquareMeterRepository) {
		this.getSquareMeterRepository = getSquareMeterRepository
	}

	async get (): Promise<number> {
		const result = await this.getSquareMeterRepository.get()
		return result
    }   
}
