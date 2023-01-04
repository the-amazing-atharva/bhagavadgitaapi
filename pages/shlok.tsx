import React from "react";
import Navbar from "../components/Navbar";
import Verse from "../components/Verse";
import styles from "../styles/verse.module.css";

const shlok = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.verseContainer}>
        <div className={styles.verseHeader}>
          <h1>Verse Title</h1>
        </div>
        <div className={styles.verseBody}>
          <Verse />
        </div>
      </div>
    </div>
  );
};

export default shlok;
