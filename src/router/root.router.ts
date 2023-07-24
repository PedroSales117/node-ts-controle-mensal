import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";

const root_router: FastifyPluginAsyncTypebox = async (fastify) => {
  fastify.get(
    "/status",
    {
      schema: {
        tags: ["Healthcheck"],
        response: {
          200: {
            type: "object",
            properties: {
              status: { type: "string" },
            },
          },
        },
      },
    },
    async () => {
      return { status: "up" };
    },
  );
};
export default root_router;
