import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import monthlyEstimateController from "./monthly-query.controller";

const monthlyQueryEstimateRoute: FastifyPluginAsyncTypebox = async (
  fastify,
) => {
  fastify.get("/estimate", monthlyEstimateController.readEstimates);
};

export default monthlyQueryEstimateRoute;
