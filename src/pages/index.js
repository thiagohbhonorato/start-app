import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/components/Start.module.css";
import SettingBar from "../components/SettingBar";

import ShortcutList from "../components/ShortcutList";
import ShortcutGrid from "../components/ShortcutGrid";
import StartContext from "../context/StartContext";

function Start({ data }) {
  return (
    <Layout>
      <Head>
        <title>Start.app</title>
      </Head>
      <div className={styles.container}>
        <StartContext.Provider value={{ data }}>
          <SettingBar />
          <ShortcutList />
          <ShortcutGrid />
        </StartContext.Provider>
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
