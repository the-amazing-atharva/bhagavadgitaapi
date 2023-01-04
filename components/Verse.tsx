import React from "react";
import styles from "../styles/verse.module.css";
import { data } from "../assets/extra/verse";

const Verse = () => {
  return (
    <>
      {data.map(({ id, chapter_number, verse_number, text, title }) => {
        return (
          <>
            <div className={styles.manuscript_card}>
              <div id={`${id}`} className={styles.manuscript_card_header}>
                <div className={styles.manuscript_title}>
                  <h1>{title}</h1>
                </div>
                <div className={styles.verse_data}>
                  <p>
                    Chapter: <strong>{chapter_number}</strong>
                  </p>
                  <p>
                    Verse: <strong>{verse_number}</strong>
                  </p>
                </div>
              </div>
              <div className={styles.manuscript_card_body}>
                <p>{text}</p>
                <a
                  href={`api/shlok?id=${id}`}
                  className={styles.aTag}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read more...
                </a>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Verse;
