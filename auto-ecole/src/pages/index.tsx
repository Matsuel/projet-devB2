import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/Components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Accueil</title>
      </Head>
      <main>
        <Header />
        <h1>Wow incroyable ce site d'avis</h1>
      </main>
    </div>
  );
}
