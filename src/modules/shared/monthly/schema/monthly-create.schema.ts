import {
  MonthlyEstimateErrorReplyDTOSchema,
  MonthlyEstimateReplyDTOSchema,
  MonthlyEstimateUpdateDTOSchema,
  MonthlyEstimateUpdatedReplyDTOSchema,
  MonthlyEstimatesDTO,
  MonthlyEstimatesDTOSchema,
} from "../../dto/monthly.dto";
import { FastifySchema } from "fastify";
import { database_schema } from "../../database/dto/database.dto";

export const monthlyEstimatesSchema =
  new database_schema<MonthlyEstimatesDTO>();

export const MonthlyEstimateInsertSchema: FastifySchema = {
  description: "Endpoint for create monthly estimates.",
  tags: ["Monthly Estimates"],
  body: MonthlyEstimatesDTOSchema,
  response: {
    201: {
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
    404: {
      description: "Bad request, must be revised.",
      ...MonthlyEstimateErrorReplyDTOSchema,
    },
    500: {
      description: "Internal server error.",
      ...MonthlyEstimateErrorReplyDTOSchema,
    },
  },
};

export const MonthlyEstimateUpdateSchema: FastifySchema = {
  description: "Endpoint for update monthly estimates.",
  tags: ["Monthly Estimates"],
  body: MonthlyEstimateUpdateDTOSchema,
  response: {
    200: {
      description: "Request was sent successfully, document created.",
      ...MonthlyEstimateUpdatedReplyDTOSchema,
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
