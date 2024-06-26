import React from "react";
import styles from "./Button.module.css";

export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={styles.button}
    >
      {props.children}
    </button>
  );
}
