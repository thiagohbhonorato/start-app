import Head from "next/head";
import styles from "../styles/Start.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Start.app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/settings">
        <a>Settings</a>
      </Link>
    </div>
  );
}
