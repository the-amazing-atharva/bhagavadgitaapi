import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/homeContainer.module.css";

const HomeContainer = () => {
  const [shlok, setShlok] = useState(
    "धृतराष्ट्र उवाच | धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः |\n मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ||१-१||"
  );

  const [pronc, setPronc] = useState(
    "dhṛtarāṣṭra uvāca . dharmakṣetre kurukṣetre samavetā yuyutsavaḥ . māmakāḥ pāṇḍavāścaiva kimakurvata sañjaya ||1-1||"
  );

  const [shlokMeaning, setShlokMeaning] = useState(
    "1.1. Dhrtarastra said O Sanjaya, what did my sons (and others) and Pandu's sons (and others) actually do when, eager for battle, they assembled on the sacred field, the Kuruksetra (Field of the Kurus)?"
  );

  return (
    <div className={`${styles.home_container} ${styles.container}`}>
      <div className={styles.container_box}>
        <div className={styles.contentBox}>
          <h1 className={styles.shlok}>{shlok}</h1>
          <p className={styles.pronc}>{pronc}</p>
          <h2 className={styles.shlokMeaning}>{shlokMeaning}</h2>
        </div>
        <div className={styles.buttonBox}>
          <Link className={styles.btn} onClick={() => {}} href="#">
            Btn1
          </Link>
          <Link className={styles.btn} onClick={() => {}} href="#">
            Btn2
          </Link>
          <Link className={styles.btn} onClick={() => {}} href="#">
            Btn3
          </Link>
          <Link className={styles.btn} onClick={() => {}} href="#">
            Btn4
          </Link>
          <Link className={styles.btn} onClick={() => {}} href="#">
            Btn5
          </Link>
          <Link className={styles.btn} onClick={() => {}} href="#">
            Btn6
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
