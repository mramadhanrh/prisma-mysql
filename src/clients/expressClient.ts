import express from "express";

export const expressClient = express();

expressClient.use(express.json());
expressClient.use(express.urlencoded({ extended: true }));
