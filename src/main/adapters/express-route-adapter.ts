/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Controller, HttpRequest } from '@Presentation/protocols'
import { Request, Response } from 'express'
export const adaptRoute = (controller: Controller) => {
	return async (req: Request,res: Response) => {
		const httpRequest: HttpRequest = {
			body: req.body
		}
		const httpResponse = await controller.handle(httpRequest)
		res.status(httpResponse.statusCode).json(httpResponse.body)
	}
}
