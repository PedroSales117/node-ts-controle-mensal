/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Result, ok, err } from "neverthrow";
import { database_model } from "../../shared/database/dto/database.dto";
import { monthlyEstimatesSchema } from "../../shared/monthly/schema/monthly-create.schema";
import {
  MonthlyEstimateUpdateDTO,
  MonthlyEstimateUpdateDTOSchema,
  MonthlyEstimatesDTO,
} from "../../shared/dto/monthly.dto";
import {
  IEstimateBadRequestReplyDTO,
  IEstimateErrorReplyDTO,
  IEstimateInternalServerReplyDTO,
  IEstimateOkReplyDTO,
} from "../../shared/dto/monthly-reply.dto";
import { validateRequiredFields } from "../../shared/helpers/validate-request-fields.helper";

import mongoose from "mongoose";

const update = async (
  updateBody: MonthlyEstimateUpdateDTO,
): Promise<Result<IEstimateOkReplyDTO, IEstimateErrorReplyDTO>> => {
  const missing_fields_validator = validateRequiredFields(
    Object.keys(updateBody),
    Object.keys(MonthlyEstimateUpdateDTOSchema.properties),
  );

  if (missing_fields_validator.isErr()) {
    return err({
      status: 400,
      data: {
        error: missing_fields_validator.error,
      },
    } as IEstimateBadRequestReplyDTO);
  }

  const monthly_estimate_model = database_model<MonthlyEstimatesDTO>(
    "meses",
    monthlyEstimatesSchema,
  );

  const update_estimate_query =
    await monthly_estimate_model.collection.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(updateBody._id) },
      { $set: updateBody.new_estimate },
    );

  if (update_estimate_query === null) {
    return err({
      status: 500,
      data: {
        error: "Couldn't update monthly estimate",
      },
    } as IEstimateInternalServerReplyDTO);
  }

  return ok({
    status: 200,
    data: {
      updated_estimate: update_estimate_query,
    },
  });
};

export default {
  update,
};
