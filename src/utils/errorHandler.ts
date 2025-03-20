import { NextFunction, Request, Response } from "express";
import { ServiceError } from "./serviceErrors";

export const errorHandler = (
  err: ServiceError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const { message, type } = err;
  res
    .status(500)
    .json({ type, message, stack: process.env.NODE_ENV === "dev" ? err.stack : undefined });
  console.error({ type, message }, err.stack);
};
