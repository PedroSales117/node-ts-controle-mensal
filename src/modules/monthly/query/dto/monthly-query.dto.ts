import { Type, Static } from "@sinclair/typebox";

export const MonthlyQueryEstimateDTOSchema = Type.Object({
  field: Type.String(),
  value: Type.Unknown(),
});

export type MonthlyQueryEstimateDTO = Static<
  typeof MonthlyQueryEstimateDTOSchema
>;
