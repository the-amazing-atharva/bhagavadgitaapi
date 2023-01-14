import React, { useState, useEffect } from "react";
import styles from "../styles/chapters.module.css";

const CardComponent = () => {
  interface Chapter {
    id: number;
    name: string;
    chapter_number: number;
    chapter_summary: string;
    chapter_summary_hindi: string;
    name_translation: string;
    verses_count: number;
  }
  const [data, setData] = useState<Chapter[]>([]);
  const [hindi, setHindi] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/api/chapter");
      const data = await response.json();
      console.log(data);
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.btnDiv}>
        <div className={styles.languageBtn}>
          <input
            id="languageBtn"
            type="checkbox"
            className={`${styles.check_toggle} ${styles.check_toggle_round_flat}`}
            onChange={() => setHindi(!hindi)}
          />
          <label htmlFor="languageBtn"></label>
          <span className={styles.hi}>HI</span>
          <span className={styles.en}>EN</span>
        </div>
      </div>

      {data.map((chapter: Chapter) => {
        return (
          <>
            <div key={chapter.id} className={styles.card}>
              <div className={`${styles.face} ${styles.face1}`}>
                <div className={styles.content}>
                  <span className={styles.contentTitle}>
                    <h1>{chapter.name_translation}</h1>
                    <span className={styles.titleText}>
                      <strong>Verse Count:</strong> {chapter.verses_count}
                      {"\n"}
                      <strong>Chapter Number:</strong> {chapter.chapter_number}
                    </span>
                  </span>
                  <p className={styles.cardText}>
                    {hindi
                      ? chapter.chapter_summary
                      : chapter.chapter_summary_hindi}
                  </p>
                </div>
              </div>
              {/* <div className={`${styles.face} ${styles.face2}`}>
                <h2>{chapter.name_translation}</h2>
              </div> */}
            </div>
          </>
        );
      })}
    </div>
  );
};

const ChapterContainer = () => {
  return (
    <>
      <CardComponent />
    </>
  );
};

export default ChapterContainer;
