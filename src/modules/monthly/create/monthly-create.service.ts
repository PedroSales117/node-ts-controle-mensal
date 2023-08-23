import { Result, ok, err } from "neverthrow";
import { database_model } from "../../shared/database/dto/database.dto";
import { monthlyEstimatesSchema } from "../../shared/monthly/schema/monthly-create.schema";
import {
  MonthlyEstimatesDTO,
  MonthlyEstimatesDTOSchema,
} from "../../shared/dto/monthly.dto";
import {
  IEstimateBadRequestReplyDTO,
  IEstimateCreatedReplyDTO,
  IEstimateErrorReplyDTO,
  IEstimateInternalServerReplyDTO,
} from "../../shared/dto/monthly-reply.dto";
import { returnMissingRequestFields } from "../../shared/helpers/validate-request-fields.helper";

const create = async (
  estimate: MonthlyEstimatesDTO,
): Promise<Result<IEstimateCreatedReplyDTO, IEstimateErrorReplyDTO>> => {
  const missing_fields = returnMissingRequestFields(
    Object.keys(estimate),
    Object.keys(MonthlyEstimatesDTOSchema.properties),
  );

  if (missing_fields.length > 0) {
    return err({
      status: 400,
      data: {
        error: `Missing required field ${missing_fields.join(", ")}`,
      },
    } as IEstimateBadRequestReplyDTO);
  }

  const new_estimate = await database_model<MonthlyEstimatesDTO>(
    "meses",
    monthlyEstimatesSchema,
  ).collection.insertOne(estimate);

  if (!new_estimate.insertedId)
    return err({
      status: 500,
      data: {
        error: "Internal server error",
      },
    } as IEstimateInternalServerReplyDTO);

  return ok({
    status: 201,
    data: {
      object_id: new_estimate.insertedId.toString(),
    },
  });
};

export default {
  create,
};
