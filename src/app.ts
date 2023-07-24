import "dotenv/config";
import { router_v1 } from "./router";
import { connect_database } from "./configurations/database";
import { getEnv } from "./utils/get-env.utils";
import { server } from "./configurations/server";

const database_host: string = getEnv("DATABASE_HOST");

const app = async (): Promise<void> => {
  try {
    const port = Number(process.env.PORT ?? 3000);

    void connect_database(database_host).then(async () => {
      await server
        .listen({
          port,
          host: "0.0.0.0",
        })
        .then(() => {
          console.log(`Server listening on port http://0.0.0.0:${port}`);
        });
    });

    await server.register(router_v1, { prefix: "/api/v1" });
  } catch (error) {
    console.error(error);
  }
};

void app();
