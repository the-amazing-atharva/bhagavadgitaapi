import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "../styles/navbar.module.css";

import TypingEffect from "./TypingEffect";

const Navbar: React.FC = () => {
  const [nav, setNav] = useState<any | null>(() => null);

  const verseHref = "/verse";
  const chapterHref = "/chapter";
  const authorHref = "/author";
  const helpHref = "/help";
  const docsHref = "/documentation";

  useEffect(() => {
    let lastScrollPosition = 0;
    setNav(true);

    document.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > lastScrollPosition) {
          setNav(false);
        } else {
          setNav(true);
        }
        lastScrollPosition = window.scrollY;
      },
      { passive: true }
    );
  }, []);
  return (
    <>
      <nav
        style={
          nav
            ? {
                opacity: 1,
                top: 0,
              }
            : {
                opacity: 0,
                top: "-100%",
              }
        }
        className={styles.nav}
      >
        <Link href="/" className={styles.nav_text}>
          <h1>
            {/* <TypingEffect /> */}
            || Bhagavad Gita ||
          </h1>
        </Link>

        <ul className={styles.nav_links}>
          <input className={styles.navInput} type="checkbox" id="check" />
          <label htmlFor="check" className={styles.checkBtn}>
            &#9776;
          </label>

          <div className={styles.menu}>
            <li>
              <Link href={verseHref} className={styles.menuBtn}>
                <span className={styles.navSpan}>|| </span>
                verse
                <span className={styles.navSpan}> ||</span>
              </Link>
            </li>
            <li>
              <Link href={chapterHref} className={styles.menuBtn}>
                <span className={styles.navSpan}>|| </span>
                chapter
                <span className={styles.navSpan}> ||</span>
              </Link>
            </li>
            <li>
              <Link href={authorHref} className={styles.menuBtn}>
                <span className={styles.navSpan}>|| </span>
                author
                <span className={styles.navSpan}> ||</span>
              </Link>
            </li>
            <li>
              <Link href={docsHref} className={styles.menuBtn}>
                <span className={styles.navSpan}>|| </span>
                docs
                <span className={styles.navSpan}> ||</span>
              </Link>
            </li>
            <li>
              <Link href={helpHref} className={styles.menuBtn}>
                <span className={styles.navSpan}>|| </span>
                help
                <span className={styles.navSpan}> ||</span>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
