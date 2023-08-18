import { database_model } from "../../shared/database/dto/database.dto";
import { monthlyEstimatesSchema } from "../../shared/monthly/schema/monthly-create.schema";
import { MonthlyEstimatesDTO } from "../../shared/dto/monthly-create.dto";

export class MonthlyEstimate {
  public async create(estimate: MonthlyEstimatesDTO): Promise<string> {
    const monthly_estimate = database_model<MonthlyEstimatesDTO>(
      "meses",
      monthlyEstimatesSchema,
    );

    const new_estimate = new monthly_estimate(estimate);

    return await new_estimate.collection.insertOne(estimate).then((result) => {
      return String(result.insertedId);
    });
  }
}
