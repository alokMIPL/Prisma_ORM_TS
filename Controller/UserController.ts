import { Request, Response } from 'express';
import prisma from '../DB/db.config.js';

// Define TypeScript interfaces
interface UserRequestBody {
  name: string;
  email: string;
  password: string;
}

interface UserResponse {
  status: number;
  message: string;
  data?: any;
}

// create new user
export const createUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, email, password }: UserRequestBody = req.body;

    // Validate required fields
    if (!name || !email || !password) {
      return res.status(400).json({
        status: 400,
        message: "Name, email and password are required.",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        status: 400,
        message: "Please provide a valid email address.",
      });
    }

    // Check if user already exists
    const findUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (findUser) {
      return res.status(400).json({
        status: 400,
        message: "Email already taken. Please use another email.",
      });
    }

    // Create new user
    const newUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password, // In production, hash the password!
      },
      // Select specific fields to return (exclude password)
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        // Don't include password in response
      }
    });

    return res.status(201).json({
      status: 201,
      message: "User created successfully",
      data: newUser,
    });

  } catch (error: any) {
    console.error("Error creating user:", error);
    
    // Handle Prisma specific errors
    if (error.code === 'P2002') {
      return res.status(400).json({
        status: 400,
        message: "A user with this email already exists.",
      });
    }

    return res.status(500).json({
      status: 500,
      message: "An error occurred while creating user.",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};