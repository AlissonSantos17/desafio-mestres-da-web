import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';

class UserController {
  async listUser(request: Request, response: Response) {
    const users = await getRepository(User).find();
    
    return response.json(users);
  };

  async create(request: Request, response: Response) {
    const repository = getRepository(User);
    const { name, email, password, isAdmin } = request.body;
    
    const userExists = await repository.findOne({ where: { email } });

    if(userExists) {
      return response.sendStatus(409);
    }

    const user = repository.create({ name, email, password, isAdmin });
    await repository.save(user);

    return response.json(user);
  };
}

export default new UserController();