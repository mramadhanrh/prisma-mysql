import { User } from "@prisma/client";
import { createUser, findUser, findUserByEmail, getAllUsers } from "../models/userModel";
import { ServiceError } from "../utils";

export const getAllUsersService = async () => {
  const users = await getAllUsers();
  return users;
};

export const getUserService = async (id: number) => {
  const user = await findUser(id);
  return user;
};

export const createUserService = async (user: Omit<User, "id">) => {
  const userExists = await findUserByEmail(user.email);
  if (userExists) throw new ServiceError("user_already_exists");

  const response = await createUser(user);
  return response;
};
