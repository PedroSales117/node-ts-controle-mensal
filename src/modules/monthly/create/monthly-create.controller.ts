import { RouteHandler } from "fastify";
import { MonthlyEstimatesDTO } from "../../shared/dto/monthly-create.dto";
import { MonthlyEstimate } from "./monthly-create.service";

const insertNewEstimate: RouteHandler<{
  Body: MonthlyEstimatesDTO;
}> = async (request, reply) => {
  const estimate_id = new MonthlyEstimate().create(request.body);
  return reply.status(201).send({
    data: {
      message: await estimate_id,
    },
  });
};

export default {
  insertNewEstimate,
};
