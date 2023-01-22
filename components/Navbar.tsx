import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "../styles/navbar.module.css";

import TypingEffect from "./TypingEffect";

const Navbar: React.FC = () => {
  const [nav, setNav] = useState<any | null>(() => null);
  const [verse, setVerse] = useState("Verse");
  const [chapter, setChapter] = useState("Chapter");
  const [author, setAuthor] = useState("Author");
  const [api, setApi] = useState("Api");
  const [contact, setContact] = useState("Help");

  const [verseHref, setVerseHref] = useState("/verse");
  const [chapterHref, setChapterHref] = useState("/chapter");
  const [authorHref, setAuthorHref] = useState("/author");
  const [apiHref, setApiHref] = useState("/documentation");
  const [contactHref, setContactHref] = useState("/help");

  useEffect(() => {
    if (window.location.pathname === "/verse") {
      setVerse("Home");
      setVerseHref("/");
    } else if (window.location.pathname === "/chapter") {
      setChapter("Home");
      setChapterHref("/");
    } else if (window.location.pathname === "/author") {
      setAuthor("Home");
      setAuthorHref("/");
    } else if (window.location.pathname === "/documentation") {
      setApi("Home");
      setApiHref("/");
    } else if (window.location.pathname === "/help") {
      setContact("Home");
      setContactHref("/");
    } else if (window.location.pathname === "/") {
      setVerse("Verse");
      setVerseHref("/verse");
      setChapter("Chapter");
      setChapterHref("/chapter");
      setAuthor("Author");
      setAuthorHref("/author");
      setApi("Api");
      setApiHref("/documentation");
      setContact("Help");
      setContactHref("/help");
    }
  }, []);

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
              <Link href={verseHref} className={styles.menuBtn}>
                <span className={styles.navSpan}>|| </span>
                {verse}
                <span className={styles.navSpan}> ||</span>
              </Link>
            </li>
            <li>
              <Link href={chapterHref} className={styles.menuBtn}>
                <span className={styles.navSpan}>|| </span>
                {chapter}
                <span className={styles.navSpan}> ||</span>
              </Link>
            </li>
            <li>
              <Link href={authorHref} className={styles.menuBtn}>
                <span className={styles.navSpan}>|| </span>
                {author}
                <span className={styles.navSpan}> ||</span>
              </Link>
            </li>
            <li>
              <Link href={apiHref} className={styles.menuBtn}>
                <span className={styles.navSpan}>|| </span>
                {api}
                <span className={styles.navSpan}> ||</span>
              </Link>
            </li>
            <li>
              <Link href={contactHref} className={styles.menuBtn}>
                <span className={styles.navSpan}>|| </span>
                {contact}
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
