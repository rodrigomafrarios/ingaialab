import { MongoHelper } from './infra/db/helpers/mongo-helper'
import env from './main/config/env'

MongoHelper.connect(env.mongoUrl)
.then(async () => {
	const app = (await import('./app')).default
	app.listen(process.env.PORT || env.port, () => {
		console.log(`Server running at http://localhost:${env.port} for dev`)
	})
})
.catch(console.error)
