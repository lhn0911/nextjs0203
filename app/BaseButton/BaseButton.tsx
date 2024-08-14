import React from "react";
import styles from "@/app/BaseButton/BaseButton.module.css";
export default function BaseButton() {
  return (
    <div className={styles.button}>
      <button className={styles.primary}>Primary</button>

      <button className={styles.success}>Success</button>

      <button className={styles.warning}>Warning</button>

      <button className={styles.danger}>Danger</button>
    </div>
  );
}
