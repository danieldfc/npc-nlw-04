import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../entities/User';

class UsersController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const usersRepository = getRepository(User);

    const userExists = await usersRepository.findOne({
      where: { email },
    });

    if (userExists) {
      return response.status(400).json({ message: 'User already exists' })
    }

    const user = usersRepository.create({
      name,
      email,
    });

    await usersRepository.save(user);

    return response.status(201).json(user);
  }
}

export default UsersController;
