/* eslint-disable import/first */
import moduleAlias from 'module-alias'
import path from 'path'

moduleAlias.addAliases({
	'@Presentation': path.join(__dirname,'/presentation'),
	'@Data': path.join(__dirname , '/data'),
	'@Domain': path.join(__dirname , '/domain'),
	'@Infra': path.join(__dirname , '/infra'),
	'@Main': path.join(__dirname , '/main'),
	'@Utils': path.join(__dirname , '/utils'),
	'@Routes': path.join(__dirname, '/main/routes')
})

import express from 'express'
import setupMiddlewares from './main/config/middlewares'
import setupRoutes from './main/config/routes'
import setupSwagger from './main/config/swaggger'
const app = express()
setupSwagger(app)
setupMiddlewares(app)
setupRoutes(app)
export default app
