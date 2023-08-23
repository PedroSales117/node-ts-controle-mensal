import {
  MonthlyEstimatesDTO,
  MonthlyEstimatesDTOSchema,
} from "../../dto/monthly.dto";
import { FastifySchema } from "fastify";
import { database_schema } from "../../database/dto/database.dto";
import { Type } from "@sinclair/typebox";

const MonthlyEstimateReplyDTOSchema = Type.Object({
  data: Type.Object({
    object_id: Type.String(),
  }),
});

const MonthlyEstimateErrorReplyDTOSchema = Type.Object({
  data: Type.Object({
    error: Type.String(),
  }),
});

export const monthlyEstimatesSchema =
  new database_schema<MonthlyEstimatesDTO>();

export const MonthlyEstimateInsertSchema: FastifySchema = {
  description: "Endpoint for create monthly estimates.",
  tags: ["Monthly Estimates"],
  body: MonthlyEstimatesDTOSchema,
  response: {
    200: {
      description: "Request was sent successfully, document created.",
      ...MonthlyEstimateReplyDTOSchema,
    },
    400: {
      description: "Bad request, must be revised.",
      ...MonthlyEstimateErrorReplyDTOSchema,
    },
    500: {
      description: "Internal server error.",
      ...MonthlyEstimateErrorReplyDTOSchema,
    },
  },
};

export const MonthlyEstimateReadSchema: FastifySchema = {
  description: "Endpoint for read monthly estimates.",
  tags: ["Monthly Estimates"],
  querystring: MonthlyEstimatesDTOSchema,
  response: {
    200: {
      description: "Request was sent successfully, object retrieved.",
      ...MonthlyEstimateReplyDTOSchema,
    },
    400: {
      description: "Bad request, must be revised.",
      ...MonthlyEstimateErrorReplyDTOSchema,
    },
    500: {
      description: "Internal server error.",
      ...MonthlyEstimateErrorReplyDTOSchema,
    },
  },
};
