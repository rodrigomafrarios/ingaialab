import request from 'supertest'
import app from '../app'

describe('CORS Middleware', () => {
	test('Should enable CORS', async () => {
		app.post('/test_cors', (req, res) => {
			res.send()
		})
		await request(app)
		.post('/test_cors')
		.expect('access-control-allow-origin','*')
	})
})
