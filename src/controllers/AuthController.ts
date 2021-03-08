require('dotenv').config()
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/User';

class AuthController {
  async login(request: Request, response: Response) {
    const { email, password } = request.body;
    const repository = getRepository(User);

    const user = await repository.find({
      where: { email }
    })
    
    if(user.length === 1) {
      if(await bcrypt.compare(password, user[0].password)) {
        const token = jwt.sign({ id: user[0].id }, `${process.env.APP_SECRET}`, { expiresIn: '1d'});
        
        const data = {
          id: user[0].id,
          name: user[0].name,
          email: user[0].email,
          token,
          isAdmin: user[0].isAdmin
        };

        return response.status(200).json(data);
      } else {
        return response.status(401).json({ message: 'User not found' });
      }

    } else {
      return response.status(401).json({ message: 'User not found' });
    };

  }
}

export default new AuthController();