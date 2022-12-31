import Head from "next/head";
// import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

// const inter = Inter({ subsets: ["latin"] });

// components
import HomePage from "../components/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>|| Bhagavad Gita ||</title>
        <meta
          name="description"
          content="A free open sorce bhagavad gita portal."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/krishna.ico" />
      </Head>
      <main className={styles.main}>
        <HomePage />
      </main>
    </>
  );
}
