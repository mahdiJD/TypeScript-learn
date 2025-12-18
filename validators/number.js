
export function assertNumber(value, fieldName) {
  if (typeof value !== "number" || Number.isNaN(value)) {
    throw new TypeError(`${fieldName} must be a valid number`);
  }
}