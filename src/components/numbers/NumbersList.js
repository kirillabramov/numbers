import React from "react";
import { NumberItem } from "./NumberItem";

import styles from "./Numbers.module.css";

export const NumbersList = ({ numbers, setNumbers }) => {
  const onItemChange = (id) => ({ target: { value } }) => {
    setNumbers((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const numberItems = Object.entries(numbers);

  return (
    <div className={styles.wrapper}>
      {numberItems.length
        ? numberItems.map(([key, value]) => (
            <NumberItem
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
