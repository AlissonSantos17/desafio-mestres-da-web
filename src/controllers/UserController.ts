import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';

class UserController {
  async create(request: Request, response: Response) {
    const repository = await getRepository(User);
    const { name, email, password, isAdmin } = request.body;
    
    const userExists = await repository.findOne({ where: { email } });

    if(userExists) {
      return response.status(409).send({ message: 'Email already exists!' });
    }

    const user = repository.create({ name, email, password, isAdmin });
    await repository.save(user);

    return response.status(201).json(user);
  };

  async listUser(request: Request, response: Response) {
    const users = await getRepository(User).find();
    
    if(users.length == 0) {
      return response.status(404).json({ message: 'No users found!' })
    }

    return response.json(users);
  };
}

export default new UserController();