import rules from "../constants/rules";
import { getCorrectBooleanValue } from "./getCorrectBooleanValue";

export const countResult = ({ A, B, C, D, E, F, rule = rules.BASE }) => {
  A = getCorrectBooleanValue(A);
  B = getCorrectBooleanValue(B);
  C = getCorrectBooleanValue(C);
  D = parseFloat(D);
  E = parseInt(E);
  F = parseInt(F);

  const conditionsMap = {
    FIRST: A && B && !C,
    SECOND: A && B && C,
    THIRD: !A && B && C,
    FOURH: A && !B && C,
  };
  const hValues = {
    [conditionsMap.FIRST]: rule === rules.CUSTOM2 ? "T" : "M",
    [conditionsMap.SECOND]: "P",
    [conditionsMap.THIRD]: "T",
    [conditionsMap.FOURTH]: rule === rules.CUSTOM2 ? "M" : undefined,
  };

  const kValues = {
    M: rule === rules.CUSTOM2 ? F + D + (D * E) / 100 : D + (D * E) / 10,
    P:
      rule === rules.CUSTOM1 ? 2 * D + (D * E) / 100 : D + (D * (E - F)) / 25.5,
    T: D - (D * F) / 30,
  };

  const keys = Object.keys(hValues);

  const H = hValues[keys.find((key) => key !== "false")] || "error";
  const K = kValues[H] || kValues[H] === 0 ? kValues[H] : "error";

  return { H, K };
};
