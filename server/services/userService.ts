import { NextFunction, Response } from "express";
import userModel from "../models/userModel";
import { redis } from "../utils/redis";
import ErrorHandler from "../utils/ErrorHandler";

// get user by id
export const getUserById = async (id: string, res: Response) => {
  const userJson = await redis.get(id);

  if (userJson) {
    const user = JSON.parse(userJson);
    res.status(200).json({
      success: true,
      user,
    });
  }
};

// get all users
export const getAllUsersService = async (res: Response) => {
  const users = await userModel.find().sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    users,
  });
};

// update user role
export const updateUserRoleService = async (
  res: Response,
  next: NextFunction,
  id: string,
  role: string
) => {
  const user = await userModel.findByIdAndUpdate(id, { role }, { new: true });
  res.status(201).json({
    success: true,
    user,
  });
  try {
  } catch (error: any) {
    return next(new ErrorHandler(error.message, 400));
  }
};
