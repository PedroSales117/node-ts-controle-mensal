import { RouteHandler } from "fastify";
import { MonthlyQueryEstimateDTO } from "./dto/monthly-query.dto";
import MonthlyEstimateQuery from "./monthly-query.service";

const readEstimates: RouteHandler<{
  Querystring: MonthlyQueryEstimateDTO;
}> = async (request, reply) => {
  const estimate = await MonthlyEstimateQuery.read(request.query);

  if (estimate.isErr()) {
    return reply.status(estimate.error.status).send(estimate.error);
  }

  return reply.status(estimate.value.status).send(estimate.value.data);
};

export default {
  readEstimates,
};
