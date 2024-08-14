import React from "react";
import styles from "./Login.module.css";

export default function FormLogin() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Form Sign up</h1>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.input}
            placeholder="Your name"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            placeholder="you@company.com"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className={styles.input}
            placeholder="+84 (123) 456-789"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            className={styles.textarea}
            placeholder="Tell us a little about the project..."
          ></textarea>
        </div>
        <div className={styles.formGroup}>
          <label>Skills</label>
          <div className={styles.skills}>
            <label>
              <input type="checkbox" name="skills" value="HTML" /> HTML
            </label>
            <label>
              <input type="checkbox" name="skills" value="CSS" /> CSS
            </label>
            <label>
              <input type="checkbox" name="skills" value="UX design" /> UX
              design
            </label>
            <label>
              <input type="checkbox" name="skills" value="JavaScript" />{" "}
              JavaScript
            </label>
            <label>
              <input type="checkbox" name="skills" value="ReactJS" /> ReactJS
            </label>
            <label>
              <input type="checkbox" name="skills" value="Java" /> Java
            </label>
          </div>
        </div>
        <button type="submit" className={styles.submitButton}>
          Sign up
        </button>
      </form>
    </div>
  );
}
