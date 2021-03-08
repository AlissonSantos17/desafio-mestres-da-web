// import { Request, Response, NextFunction } from 'express';
// import { getRepository } from 'typeorm';
// import AuthController from '../controllers/AuthController'

// import User from '../models/User';

// export default async function verifyAdmin(request: Request, response: Response, next: NextFunction) {
//   request.userId = this.id;
//   const repository = await getRepository(User);
//   AuthController.getEm
//   const { email } = request.body;

//   const userVerification = await repository.find({ where: { id: 'f8c5f9de-819a-4486-af57-d87b476ddccf' }});
//   console.log(userVerification);

//   return next()

//   // if(userVerification[0].isAdmin === false) {
//   //   return response.status(404).json({ message: 'Você não é ADM'})
//   // }

//   // return response.status(200).json({ message: 'Você é ADM'})
// }