import Head from "next/head";
import styles from "../../styles/Settings.module.css";
import Link from "next/link";

export default function Settings() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Start.app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/">
        <a>Start</a>
      </Link>
    </div>
  );
}
