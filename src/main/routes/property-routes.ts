import { Router } from 'express'

export default (router: Router): void => {
	router.post('/property/calc', (req, res) => {
		res.json({ ok: 'ok' })
	})
}
