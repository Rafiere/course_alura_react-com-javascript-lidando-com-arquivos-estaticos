import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

import banner from './assets/banner.png'

import styles from "./InitialPage.module.scss"

export default function InitialPage() {

    return (
        <>
            <Header/>
            <main>
                <section className={styles.principal}>
                <Menu/>
                    <div className={styles.principal__image}>
                        <h1>A galeria mais completa do espaço!</h1>
                        <img src={banner} alt="A imagem da terra vista do espaço."/>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}