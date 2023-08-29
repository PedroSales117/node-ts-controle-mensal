import { RouteHandler } from "fastify";
import { MonthlyEstimateUpdateDTO } from "../../shared/dto/monthly.dto";
import MonthlyEstimate from "./monthly-update.service";

const updateEstimate: RouteHandler<{
  Body: MonthlyEstimateUpdateDTO;
}> = async (request, reply) => {
  const estimate_reply = await MonthlyEstimate.update(request.body);

  if (estimate_reply.isErr()) {
    return reply.status(estimate_reply.error.status).send(estimate_reply.error);
  }

  return reply.status(estimate_reply.value.status).send(estimate_reply.value);
};

export default {
  updateEstimate,
};
