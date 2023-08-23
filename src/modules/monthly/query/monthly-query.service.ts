import { database_model } from "../../shared/database/dto/database.dto";
import { monthlyEstimatesSchema } from "../../shared/monthly/schema/monthly-create.schema";
import { MonthlyEstimatesDTO } from "../../shared/dto/monthly.dto";
import { MonthlyQueryEstimateDTO } from "./dto/monthly-query.dto";

export class MonthlyEstimateQuery {
  public async read(query: MonthlyQueryEstimateDTO): Promise<unknown> {
    const monthly_estimate = database_model<MonthlyEstimatesDTO>(
      "meses",
      monthlyEstimatesSchema,
    );

    return new monthly_estimate().collection.findOne({
      [query.field]: query.value,
    });
  }
}
