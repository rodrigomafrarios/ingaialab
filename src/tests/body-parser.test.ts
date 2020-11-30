import request from 'supertest'
import app from '../app'

describe('Body parser Middleware', () => {
	test('Should parse body as json', async () => {
		app.post('/test_body_parser', (req, res) => {
			res.send(req.body)
		})
		await request(app)
		.post('/test_body_parser')
		.send({ name: 'rodrigo' })
		.expect({ name: 'rodrigo' })
	})
})
