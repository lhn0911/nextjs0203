import React from "react";
import styles from "./Popup.module.scss";

const Popup: React.FC = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <div className={styles.iconWrapper}>
          <div className={styles.icon}>!</div>
        </div>
        <h2 className={styles.title}>Delete blog post</h2>
        <p className={styles.message}>
          Are you sure you want to delete this post? This action cannot be
          undone.
        </p>
        <div className={styles.actions}>
          <button className={styles.cancelButton}>Cancel</button>
          <button className={styles.deleteButton}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
