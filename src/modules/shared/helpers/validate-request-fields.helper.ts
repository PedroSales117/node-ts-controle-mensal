export const returnMissingRequestFields = (
  received_fields: string[],
  required_fields: string[],
): string[] => {
  const missing_fields = required_fields.filter(
    (field) => !received_fields.includes(field),
  );

  return missing_fields;
};
