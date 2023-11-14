import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Pages.module.css';
export default function Home() {
    return (
        <div>
            <Head>
                <title> Meu app - Produtos </title>
            </Head>
            <Navbar />
            <div className={styles.produtos}>
                <h1> Nossos Produtos</h1>
                <main>
                    <h2> Página Produtos</h2>
                    <h3> Lista de produtos </h3>
                </main>
            </div>
            <Footer />
        </div>
    )
}