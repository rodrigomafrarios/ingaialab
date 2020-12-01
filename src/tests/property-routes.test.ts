import request from 'supertest'
import app from '../app'

describe('Property Routes', () => {
	test('Should return a calc of property on success',async () => {
		await request(app)
		.post('/api/property/calc')
		.send({
			squareMeters: 200
		})
		.expect(200)
	})
})
