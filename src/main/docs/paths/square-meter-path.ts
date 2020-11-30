export const squareMeterPath = {
	get: {
		tags: ['Square Meter'],
		summary: 'API para obter o custo fixo do m²',
		responses: {
			200: {
				description: 'Sucesso',
				content: {
					'application/json': {
						schema: {
							$ref: '#/schemas/squareMeter'
						}
					}
				}
			}
		}
	}
}
