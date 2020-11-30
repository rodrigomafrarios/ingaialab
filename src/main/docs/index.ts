import { propertyPath } from './paths/property-path'
import { squareMeterPath } from './paths/square-meter-path'
import { propertySchema } from './schemas/property-schema'
import { squareMeterSchema } from './schemas/square-meter-schema'
import { calcPropertyParamsSchema } from './schemas/calc-property-params-schema'

export default {
	openapi: '3.0.0',
	info: {
		title: 'Ingaialab',
		description: 'APIS ingaialab para calcular o valor do imóvel',
		version: '1.0.0'
	},
	servers: [{
		url: '/api'
	}],
	tags: [{
		name: 'Property'
	}],
	paths: {
		'/property/calc': propertyPath,
		'/square-meter/cost': squareMeterPath
	},
	schemas: {
		property: propertySchema,
		calcPropertyParams: calcPropertyParamsSchema,
		squareMeter: squareMeterSchema
	}

}
