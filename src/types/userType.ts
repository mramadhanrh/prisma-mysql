import { User } from "@prisma/client";

export interface GetUserByIdParams {
  id: string;
}

export type GetUserByIdResponse = User | null;
