import { User } from "@prisma/client";
import { prismaClient } from "../clients/prismaClient";

export const getAllUsers = async () => {
  return await prismaClient.user.findMany();
};

export const findUser = async (id: number) => {
  return await prismaClient.user.findUnique({
    where: { id },
  });
};

export const findUserByEmail = async (email: string) => {
  return await prismaClient.user.findUnique({
    where: { email },
  });
};

export const createUser = async (user: Omit<User, "id">) => {
  return await prismaClient.user.create({
    data: user,
  });
};
