import { SquareMeterValidator } from '../presentation/protocols/square-meter-validator'

export class SquareMeterValidatorAdapter implements SquareMeterValidator {
	private readonly range = { min: 10, max: 10000 }

	isRangeValid (squareMeter: number): boolean {
		if (squareMeter < this.range.min || squareMeter > this.range.max) {
			return false
		}
		return true
	}
}
