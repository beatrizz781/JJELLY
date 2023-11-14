import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Pages.module.css';
export default function Home() {
    return (
        <div>
            <Head>
                <title> Meu app - Sobre </title>
            </Head>
            <Navbar />
            <div className={styles.sobre}>
                <h1> Sobre Nós</h1>
                <main>
                    <h2> Conheça mais sobre nossa empresa</h2>
                    <h3> Somos bons </h3>
                </main>
            </div>
            <Footer />
        </div>
    )
}