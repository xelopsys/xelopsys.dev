import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Error() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="shortcut icon" href="icon.ico" type="image/x-icon" />

        <title>404: ERROR</title>

        <meta property="og:title" content="404: ERROR" key="title" />

      </Head>
      <h1>404</h1>
      <Link href="/">Back to home</Link>
    </div>
  );
}
