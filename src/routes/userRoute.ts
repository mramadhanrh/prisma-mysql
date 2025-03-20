import { Router } from "express";
import { createUserService, getAllUsersService, getUserService } from "../services/userService";
import { ApiResponse, GetUserByIdParams, GetUserByIdResponse } from "../types";
import { apiMessages } from "../constants";

const router = Router();

router.get("/", async (_, res) => {
  const users = await getAllUsersService();
  res.json({ message: apiMessages.httpCodes[200], data: users });
});

router.get<GetUserByIdParams, ApiResponse<GetUserByIdResponse>>("/:id", async (req, res) => {
  const { id } = req.params;

  const user = await getUserService(Number(id));
  res.json({ message: apiMessages.httpCodes[200], data: user });
});

router.post("/", async (req, res, next) => {
  try {
    const response = await createUserService(req.body);
    res.json(response);
  } catch (error) {
    next(error);
  }
});

export default router;
