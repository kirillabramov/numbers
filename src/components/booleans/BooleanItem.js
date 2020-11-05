import React from "react";

import styles from "./Booleans.module.css";

export const BooleanItem = ({ value, onChange, name }) => {
  return (
    <div className={styles.item}>
      <label htmlFor={name} className={styles.label}>
        {name}
      </label>
      <select id={name} value={value} onChange={onChange}>
        <option value={true}>true</option>
        <option value={false}>false</option>
      </select>
    </div>
  );
};
