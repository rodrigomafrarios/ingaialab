
import { SquareMeterValidatorAdapter } from '@Utils/square-meter-validator'

const factory = (): SquareMeterValidatorAdapter => {
	return new SquareMeterValidatorAdapter()
}

describe('SquareMeterValidator Adapter', () => {
	test('Should return false if validator returns false', () => {
		const sut = factory()
		const isRangeValid = sut.isRangeValid(50000)
		expect(isRangeValid).toBe(false)
	})
	test('Should return true if validator returns true', () => {
		const sut = factory()
		const isRangeValid = sut.isRangeValid(2000)
		expect(isRangeValid).toBe(true)
	})
})
