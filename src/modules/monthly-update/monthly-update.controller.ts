import { RouteHandler } from "fastify";
import { MonthlyEstimatesDTO } from "./dto/monthly-update.dto";
import { MonthlyEstimate } from "../monthly-update/monthly-update.service";

const insertNewEstimate: RouteHandler<{
  Body: MonthlyEstimatesDTO;
}> = async (request, reply) => {
  const estimate_id = new MonthlyEstimate().create(request.body);
  return reply.status(200).send({
    data: {
      message: await estimate_id,
    },
  });
};

export default { insertNewEstimate };
