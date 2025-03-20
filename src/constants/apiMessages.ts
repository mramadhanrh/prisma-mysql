const httpCodes = {
  200: "Success",
  201: "Created",
  204: "No Content",
  304: "Not Modified",
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  409: "Conflict",
  500: "Internal Server Error",
  501: "Not Implemented",
  503: "Service Unavailable",
  504: "Gateway Timeout",
};

const errorTypeMessages: Record<string, string> = {
  user_already_exists: "User already exists",
};

export const apiMessages = {
  httpCodes,
  errorTypeMessages,
};
