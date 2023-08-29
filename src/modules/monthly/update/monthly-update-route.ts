import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import monthlyEstimateController from "./monthly-update.controller";

const monthlyUpdateEstimateRoute: FastifyPluginAsyncTypebox = async (
  fastify,
) => {
  fastify.post("/estimate", monthlyEstimateController.updateEstimate);
};

export default monthlyUpdateEstimateRoute;
