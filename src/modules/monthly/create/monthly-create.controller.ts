import { RouteHandler } from "fastify";
import { MonthlyEstimatesDTO } from "../../shared/dto/monthly.dto";
import MonthlyEstimate from "./monthly-create.service";

const insertNewEstimate: RouteHandler<{
  Body: MonthlyEstimatesDTO;
}> = async (request, reply) => {
  const estimate_reply = await MonthlyEstimate.create(request.body);

  if (estimate_reply.isErr()) {
    return reply.status(estimate_reply.error.status).send(estimate_reply.error);
  }

  return reply
    .status(estimate_reply.value.status)
    .send(estimate_reply.value.data);
};

export default {
  insertNewEstimate,
};
