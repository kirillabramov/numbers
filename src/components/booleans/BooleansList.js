import React from "react";
import { BooleanItem } from "./BooleanItem";

import styles from "./Booleans.module.css";

export const BooleansList = ({ booleans, setBooleans }) => {
  const onItemChange = (id) => ({ target: { value } }) => {
    setBooleans((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const booleanItems = Object.entries(booleans);

  return (
    <div className={styles.wrapper}>
      {booleanItems.length
        ? booleanItems.map(([key, value]) => (
            <BooleanItem
              key={key}
              name={key}
              value={value}
              onChange={onItemChange(key)}
            />
          ))
        : null}
    </div>
  );
};
