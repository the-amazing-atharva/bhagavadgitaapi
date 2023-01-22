import React from "react";
import Navbar from "../components/Navbar";
import FilterVerse from "../components/Verse";
import styles from "../styles/verse.module.css";

const index = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.verseContainer}>
        <div className={styles.verseHeader}>
          <h1>Verse Title</h1>
        </div>

        <div className={styles.verseBody}>
          <FilterVerse />
        </div>
      </div>
    </div>
  );
};

export default index;
