import { Result, err, ok } from "neverthrow";

export const validateRequiredFields = (
  received_fields: string[],
  required_fields: string[],
): Result<undefined, string> => {
  const missing_fields = required_fields.filter(
    (field) => !received_fields.includes(field),
  );

  if (missing_fields.length > 0) {
    return err(
      `Missing required ${
        missing_fields.length > 1 ? "fields" : "field"
      } ${missing_fields.join(", ")}`,
    );
  }

  return ok(undefined);
};
