import React from "react";

import styles from "./Numbers.module.css";

export const NumberItem = ({ value, onChange, name }) => {
  return (
    <div className={styles.item}>
      <label htmlFor={name} className={styles.label}>
        {name}
      </label>
      <input
        type="number"
        value={value}
        onChange={onChange}
        placeholder={name}
      />
    </div>
  );
};
