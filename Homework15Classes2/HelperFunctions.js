export function validateStringInput(value) {
  if (typeof value !== "string") {
    throw new Error("Input must be a string");
  }
  if (value.trim() === "") {
    throw new Error("Input must be a non-empty string");
  }
}

export function validateAndFormatString(value) {
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

export function validateNumber(value) {
  if (!Number.isInteger(value)) {
    throw new Error("Input must be an integer");
  }
  return value;
}

export function getWithDefault(value, defaultValue, options = {}) {
  if (value !== undefined && value !== null) {
    if (typeof value === "number") {
      if (options.checkYear && value < 1886) {
        throw new Error("Too old car");
      }
    }
    return value;
  }
  return defaultValue;
}
