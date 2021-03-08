import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import auth from '../config/auth';

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}

export const authMiddleware = async (request: Request,  response: Response, next: NextFunction) => {
  const authHeader = request.headers.authorization;
  
  if (!authHeader) {
    throw new Error ('Token is Required!')    
  }

  const token = authHeader.replace('Bearer', '').trim();

  try {
    const data = jwt.verify(token, auth.jwt.secret);
    const { id } = data as TokenPayload;

    request.userId = id;
    return next();
  } catch {
    throw new Error ('Token is Invalid!')    
  }
}