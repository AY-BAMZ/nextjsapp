import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./components/Header/Header";
import RenderHome from "./components/Home/RenderHome";
// import PostProvider from "./components/UsePost/PostContext";

export default function Home() {
  return (
    <div className={styles.container}>
        <Head>
          <title> Create Next App </title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
      
          <RenderHome />
      
        </main>
        <footer className={styles.footer}> </footer>
    </div>
  );
}
