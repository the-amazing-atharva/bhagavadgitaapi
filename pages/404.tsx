import Head from "next/head";
import Link from "next/link";
import styles from "../styles/pageNotFound.module.css";

const PageNotFound = () => {
  return (
    <>
      <Head>
        <title>|| Page Not Found ||</title>
        <meta
          name="description"
          content="A free open sorce bhagavad gita portal."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/krishna.ico" />
      </Head>
      <div className={styles.main_container}>
        <div className={styles.container}>
          <div className={styles.left_container}>
            <h2 className={styles.h2}>404</h2>
            <small className={styles.small}>Page Not Found</small>
          </div>
          <div className={styles.right_container}>
            <h2 className={styles.textShlok}>
              यो मां पश्यति सर्वत्र सर्वं च मयि पश्यति |<br />
              तस्याहं न प्रणश्यामि स च मे न प्रणश्यति ||
            </h2>
            <small className={styles.textMeaning}>
              For those who see Me everywhere and see all things in Me,
              <br />I am never lost, nor are they ever lost to Me.
            </small>
          </div>
        </div>
        <Link href="/" className={styles.homeBtn}>
          Homepage
        </Link>
      </div>
    </>
  );
};

export default PageNotFound;
