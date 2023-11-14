import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Pages.module.css';
export default function Home() {
  return (
    <div>
      <Head>
        <title> Meu app - Home </title>
      </Head>
      <Navbar />
      <div className={styles.home}>
        <h1> Página Inicial</h1>
        <main>
          <h2> Corpo da Aplicação</h2>
          <h3> Fazendo do zero </h3>
        </main>
      </div>
      <Footer />
    </div>
  )
}