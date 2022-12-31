import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "../styles/navbar.module.css";

import TypingEffect from "./TypingEffect";

const Navbar: React.FC = () => {
  const [nav, setNav] = useState<any | null>(() => null);

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
      <nav className={styles.nav}>
        <div className={styles.nav_text}>
          <h1>
            <TypingEffect />
          </h1>
        </div>

        <ul className={styles.nav_links}>
          <input className={styles.navInput} type="checkbox" id="check" />
          <label htmlFor="check" className={styles.checkBtn}>
            &#9776;
          </label>

          <div className={styles.menu}>
            <li>
              <Link href="/" className={styles.menuBtn}>
                <span className={styles.navSpan}>|| </span>
                Shlok
                <span className={styles.navSpan}> ||</span>
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.menuBtn}>
                <span className={styles.navSpan}>|| </span>
                Chapters
                <span className={styles.navSpan}> ||</span>
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.menuBtn}>
                <span className={styles.navSpan}>|| </span>
                Author
                <span className={styles.navSpan}> ||</span>
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.menuBtn}>
                <span className={styles.navSpan}>|| </span>
                Api
                <span className={styles.navSpan}> ||</span>
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.menuBtn}>
                <span className={styles.navSpan}>|| </span>
                Contact
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

// <NavbarContainer>
//   <CompanyName>My Company</CompanyName>
//   <NavbarLinks>
//     <Link href="/">Home</Link>
//     <Link href="/about">About</Link>
//     <Link href="/services">Services</Link>
//     <Link href="/contact">Contact</Link>
//   </NavbarLinks>
// </NavbarContainer>
