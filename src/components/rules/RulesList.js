import React from "react";
import cx from "classnames";
import rules from "../../constants/rules";

import styles from "./Rules.module.css";

export const RulesList = ({ rule, setRule }) => {
  const rulesList = Object.entries(rules);

  return (
    <div>
      {rulesList.map(([key, value]) => {
        const buttonClass = cx(styles.button, {
          [styles.isActive]: rule === value,
        });

        return (
          <button
            key={key}
            type="button"
            onClick={() => setRule(value)}
            className={buttonClass}
          >
            {value}
          </button>
        );
      })}
    </div>
  );
};
