import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/Start.module.css";

function Start({ data }) {
  return (
    <Layout>
      <Head>
        <title>Start.app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.list}>list</div>
        <div className={styles.grid}>grid</div>
      </div>
    </Layout>
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
