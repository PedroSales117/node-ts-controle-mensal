import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import { MonthlyEstimateInsertSchema } from "../../shared/monthly/schema/monthly-create.schema";
import monthlyEstimateController from "./monthly-create.controller";

const monthlyEstimateRoute: FastifyPluginAsyncTypebox = async (fastify) => {
  fastify.post(
    "/new-estimate",
    {
      attachValidation: true,
      schema: MonthlyEstimateInsertSchema,
    },
    monthlyEstimateController.insertNewEstimate,
  );
};

export default monthlyEstimateRoute;
