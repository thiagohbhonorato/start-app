import React from "react";
import Head from "next/head";
import styles from "../styles/Start.module.css";
import Link from "next/link";

function Start({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Start.app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/settings">
        <a>Settings</a>
      </Link>
      {JSON.stringify(data)}
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch("http://localhost:3000/api/data");
  const data = await response.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Start;
