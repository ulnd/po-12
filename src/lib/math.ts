/**
 * Determine if a number is between two others.
 */
const isBetween = (num: number, lower: number, upper: number) =>
  num >= lower && num < upper;

export { isBetween };
