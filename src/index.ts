import { prismaClient } from "./clients/prismaClient";
import { expressClient } from "./clients/expressClient";
import * as routes from "./routes";
import { errorHandler } from "./utils/errorHandler";

Object.entries(routes).forEach(([path, route]) => {
  expressClient.use(`/${path}`, route);
  console.log(`Route /${path} loaded!`);
});

expressClient.use(errorHandler);

expressClient.listen(process.env.PORT || 3000, async () => {
  try {
    console.log(`Server is running on http://localhost:${process.env.PORT || 3000}`);
    await prismaClient.$connect();
    console.log("Successfully connected to database");
  } catch (error) {
    console.error("An error occurred while starting the server");
    process.exit(1);
  }
});
