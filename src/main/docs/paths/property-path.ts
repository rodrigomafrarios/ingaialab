export const propertyPath = {
	post: {
		tags: ['Property'],
		summary: 'API para calcular valor do imóvel',
		requestBody: {
			required: true,
			content: {
				'application/json': {
					schema: {
						$ref: '#/schemas/calcPropertyParams'
					}
				}
			}
		},
		responses: {
			200: {
				description: 'Sucesso',
				content: {
					'application/json': {
						schema: {
							$ref: '#/schemas/property'
						}
					}
				}
			}
		}
	}
}
