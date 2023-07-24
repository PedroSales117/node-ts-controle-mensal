import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import { MonthlyEstimateInsertSchema } from "./schema/monthly-update.schema";
import monthlyEstimateController from "./monthly-update.controller";

const monthlyEstimateRoute: FastifyPluginAsyncTypebox = async (fastify) => {
  fastify.post(
    "/new-estimate",
    {
      attachValidation: false,
      schema: MonthlyEstimateInsertSchema,
    },
    monthlyEstimateController.insertNewEstimate,
  );
};

export default monthlyEstimateRoute;
