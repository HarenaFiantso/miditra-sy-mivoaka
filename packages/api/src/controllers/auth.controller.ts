import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import { PrismaClient } from 'generated/prisma';

interface RegisterBody {
  username: string;
  email: string;
  password: string;
}

const prisma = new PrismaClient();

const login = () => {};

const register = async (req: Request<object, object, RegisterBody>, res: Response) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res.status(400).json({ error: 'Username, email and password are required' });
      return;
    }

    const usernameAlreadyExists = await prisma.user.findUnique({ where: { username } });
    if (usernameAlreadyExists) {
      return res.status(400).json({ error: 'Username is already taken' });
    }

    const emailAlreadyExists = await prisma.user.findUnique({ where: { email } });
    if (emailAlreadyExists) {
      return res.status(400).json({ error: 'Email is already taken' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        email,
      },
    });

    res.status(201).json({
      message: 'User registered successfully',
      user: { id: newUser.id, username: newUser.username, email: newUser.email },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
      res.status(500).json({ error: `Failed to register user : ${error.message}` });
    } else {
      res.status(500).json({ error: 'Unknown error occured' });
    }
  }
};

const whoami = () => {};

export { login, register, whoami };
