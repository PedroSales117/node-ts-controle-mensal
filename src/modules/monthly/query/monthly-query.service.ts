import { Result, ok, err } from "neverthrow";
import { database_model } from "../../shared/database/dto/database.dto";
import { monthlyEstimatesSchema } from "../../shared/monthly/schema/monthly-create.schema";
import { MonthlyEstimatesDTO } from "../../shared/dto/monthly.dto";
import { MonthlyQueryEstimateDTO } from "./dto/monthly-query.dto";
import {
  IEstimateNotFoundReplyDTO,
  IEstimateOkReplyDTO,
} from "../../shared/dto/monthly-reply.dto";

const read = async (
  query: MonthlyQueryEstimateDTO,
): Promise<Result<IEstimateOkReplyDTO, IEstimateNotFoundReplyDTO>> => {
  const monthly_estimate = database_model<MonthlyEstimatesDTO>(
    "meses",
    monthlyEstimatesSchema,
  );

  const estimate = await new monthly_estimate().collection.findOne({
    [query.field]: query.value,
  });

  if (estimate === null) {
    return err({
      status: 404,
      data: {
        error: "Couldn't find monthly estimate",
      },
    });
  }

  return ok({
    status: 200,
    data: {
      estimate,
    },
  });
};

export default {
  read,
};
