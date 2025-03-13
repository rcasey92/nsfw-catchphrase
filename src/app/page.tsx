import { JSX } from "react";

import { StarBackground, TreeForeground } from "./components";
import styles from "./page.module.css";

/**
 * @file page.tsx
 * @description This file defines the Home component which is the main page of the application.
 * 
 * @module Home
 */

const Home = (): JSX.Element => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Catchphrase After Dark</h1>
      <TreeForeground />
      <section>
        <div className={styles.cloud}/>
      </section>
      <StarBackground />
    </main>
  );
}

export default Home;