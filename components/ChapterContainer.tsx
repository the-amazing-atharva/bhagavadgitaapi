import React from "react";
import styles from "../styles/chapters.module.css";

const Component = async () => {
  const data = await fetch("/api/chapter").then((res) => res.json());
  return (
    <>
      {data.map(
        ({
          id,
          chapter_number,
          chapter_summary,
          chapter_summary_hindi,
          name_translation,
          verse_count,
        }: any) => {
          return (
            <>
              <div className={styles.container}>
                <div className={styles.card}>
                  <div className={`${styles.face} ${styles.face1}`}>
                    <div className="content">
                      <span className={styles.stars}></span>
                      <h2 className={styles.cardText}>
                        {data.name_translation}
                      </h2>
                      <p className={styles.cardText}>
                        Java is a class-based, object-oriented programming
                        language that is designed to have as few implementation
                        dependencies as possible.
                      </p>
                    </div>
                  </div>
                  <div className={`${styles.face} ${styles.face2}`}>
                    <h2>01</h2>
                  </div>
                </div>
              </div>
            </>
          );
        }
      )}
    </>
  );
};

// import { useState, useEffect } from "react";

// function MyComponent() {
//   const [promiseData, setPromiseData] = useState<DataType | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<Error | null>(null);

//   useEffect(() => {
//     setIsLoading(true);
//     myPromise()
//       .then((data: DataType) => {
//         setPromiseData(data);
//         setIsLoading(false);
//       })
//       .catch((e: Error) => {
//         setError(e);
//         setIsLoading(false);
//       });
//   }, []);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   } else if (error) {
//     return <div>Error: {error.message}</div>;
//   } else {
//     return <div>Data: {promiseData}</div>;
//   }
// }

const ChapterContainer = () => {
  return (
    <>
      <Component />
    </>
  );
};

export default ChapterContainer;
