import home from '../../assets/icons/home.png'
import maisCurtidas from '../../assets/icons/mais-curtidas.png'
import maisVistas from '../../assets/icons/mais-vistas.png'
import novas from '../../assets/icons/novas.png'
import surpreendaMe from '../../assets/icons/surpreenda-me.png'

import styles from './Menu.module.scss'

const Menu = () => {

    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__list}>
                <li className={styles.menu__item}>
                    <img src={home} alt=""/>
                    <a href="/">Início</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={maisCurtidas} alt=""/>
                    <a href="/">Mais Curtidas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={maisVistas} alt=""/>
                    <a href="/">Mais Vistas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={novas} alt=""/>
                    <a href="/">Novas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={surpreendaMe} alt=""/>
                    <a href="/">Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    )
}

export default Menu