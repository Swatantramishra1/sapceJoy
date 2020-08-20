export default function getNestedValue(
  object,
  propertyName,
  defaultValue = undefined
) {
  const value = propertyName.split(".").reduce(getValue, object);
  return value !== undefined ? value : defaultValue;
}

// private functions

function getValue(object, propertyName) {
  if (!propertyName) {
    throw new Error("Impossible to set null property");
  }
  return object === null || typeof object === "undefined"
    ? undefined
    : object[propertyName];
}
