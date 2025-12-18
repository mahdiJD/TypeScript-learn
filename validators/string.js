export function assertString(value, fieldName) {
  if (typeof value !== "string") {
    throw new TypeError(`${fieldName} must be a string`);
  }
}
