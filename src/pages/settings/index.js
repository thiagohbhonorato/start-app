import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function Settings() {
  return (
    <Layout>
      <Head>
        <title>Settings.app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/">
        <a>Start</a>
      </Link>
    </Layout>
  );
}
