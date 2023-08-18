import { RouteHandler } from "fastify";
import { MonthlyQueryEstimateDTO } from "./dto/monthly-query.dto";
import { MonthlyEstimateQuery } from "./monthly-query.service";

const readEstimates: RouteHandler<{
  Querystring: MonthlyQueryEstimateDTO;
}> = async (request, reply) => {
  const estimate = new MonthlyEstimateQuery().read(request.query);

  if ((await estimate) === null) {
    return reply.status(404).send({
      data: {
        status: 404,
      },
    });
  }

  return reply.status(200).send({
    data: await estimate,
  });
};

export default {
  readEstimates,
};
