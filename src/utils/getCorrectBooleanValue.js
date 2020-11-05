export const getCorrectBooleanValue = (value) => {
  if (typeof value === "string") {
    return value === "false" ? false : true;
  }

  return value;
};
