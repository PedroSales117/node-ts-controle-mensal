import { FastifyInstance } from "fastify";
import fastifySwagger, { SwaggerOptions } from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { writeFileSync } from "fs";
import path from "path";

export async function generateAPIDocs(fastify: FastifyInstance): Promise<void> {
  await fastify.register(fastifySwagger, swagger_settings);

  await fastify.register(fastifySwaggerUi, {
    routePrefix: "/docs",
  });

  fastify.ready(() => {
    const docs = fastify.swagger({ yaml: true });
    writeFileSync(path.join(__dirname, "../../../docs/swagger.yaml"), docs);
  });
}

const swagger_settings: SwaggerOptions = {
  openapi: {
    info: {
      title: "Estimativa mensal",
      version: "1.0.0",
    },
    tags: [{ name: "Monthly estimate" }],
  },
};
