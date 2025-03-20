import { apiMessages } from "../constants";

export class ServiceError extends Error {
  constructor(public type: string, public message: string = apiMessages.errorTypeMessages[type]) {
    super(message);

    this.type = type;
    this.message = this.message || "Internal Server Error";
  }
}
