import React, { useState } from "react";
import rules from "../constants/rules";
import { countResult } from "../utils/countResult";
import { BooleansList } from "./booleans/BooleansList";
import { NumbersList } from "./numbers/NumbersList";
import { RulesList } from "./rules/RulesList";

export const ResultForm = () => {
  const [booleans, setBooleans] = useState({
    A: false,
    B: false,
    C: false,
  });

  const [numbers, setNumbers] = useState({
    D: 0,
    E: 0,
    F: 0,
  });

  const [rule, setRule] = useState(rules.BASE);

  const [result, setResult] = useState({});

  const handleSubmit = () => {
    setResult(countResult({ ...booleans, ...numbers, rule }));
  };

  return (
    <div>
      <RulesList rule={rule} setRule={setRule} />
      <BooleansList setBooleans={setBooleans} booleans={booleans} />
      <NumbersList numbers={numbers} setNumbers={setNumbers} />
      <button type="button" onClick={handleSubmit}>
        Get Results
      </button>
      <div>
        Results:
        {JSON.stringify(result)}
      </div>
    </div>
  );
};
