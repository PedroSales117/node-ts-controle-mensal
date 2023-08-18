import {
  MonthlyEstimatesDTO,
  MonthlyEstimatesDTOSchema,
} from "../../dto/monthly-create.dto";
import { FastifySchema } from "fastify";
import { database_schema } from "../../database/dto/database.dto";
import { Type } from "@sinclair/typebox";

const MonthlyEstimateResponseDTOSchema = Type.Object({
  data: Type.Object({
    message: Type.String(),
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
      description: "Request was sent successfully, database created.",
      ...MonthlyEstimateResponseDTOSchema,
    },
    400: {
      description: "Bad request, must be revised.",
      ...MonthlyEstimateResponseDTOSchema,
    },
    500: {
      description: "Internal server error.",
      ...MonthlyEstimateResponseDTOSchema,
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
      ...MonthlyEstimateResponseDTOSchema,
    },
    400: {
      description: "Bad request, must be revised.",
      ...MonthlyEstimateResponseDTOSchema,
    },
    500: {
      description: "Internal server error.",
      ...MonthlyEstimateResponseDTOSchema,
    },
  },
};
