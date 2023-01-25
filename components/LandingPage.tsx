import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import imageURL from "../assets/images/arrow.png";
import Image from "next/image";
const LandingPage = () => {
  const [shloks, setShloks] = useState<string>(
    "Focus on your action and not on the results"
  );

  const shlokArr = [
    "Focus on your action and not on the results",
    "Be fearless – Soul is neither born nor does it ever die",
    "Three gateways to hell – Lust, Greed, and Anger",
    "Learn to tolerate – Nothing is permanent in this world",
    "Become stable like the ocean",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * shlokArr.length);
      setShloks(shlokArr[randomIndex]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.headerText}>
          <h1 className={styles.title}>
            {/* <TypingEffect /> */}
            <span>||</span> श्रीमद्भगवद्गीता <span>||</span>
          </h1>
          <p className={styles.shloks}>{shloks}</p>
        </div>
        <div className={styles.navList}>
          <ul className={styles.listMenu}>
            <li className={styles.listItem}>
              <Link href="/verse">Verse</Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/chapter">Chapters</Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/author">Authors</Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/documentation">Api Documentation</Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/help">Help</Link>
            </li>
          </ul>
        </div>
      </header>

      <footer className={styles.footerDiv}>
        <p>© 2021 BhagavadGita Api</p>
      </footer>
    </div>
  );
};

export default LandingPage;
