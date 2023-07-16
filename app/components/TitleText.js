import React from "react";

import styles from "./TitleText.module.scss";

export default function TitleText(props) {
  return (
    <div className={styles.con}>
      <p className={styles.text}>{props.text}</p>
      <div className={styles.dot}></div>
    </div>
  );
}
