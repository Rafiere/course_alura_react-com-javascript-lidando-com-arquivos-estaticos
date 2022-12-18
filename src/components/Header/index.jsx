import logo from './assets/logo.png'
import search from './assets/search.png'
import styles from './Header.module.scss'

const Header = () => {

    return (
        <header className={styles.header}>
            <img src={logo}alt="Alura Space Logo"/>
            <div className={styles.header__container}>
                <input className={styles.header__input}type="text" placeholder="O que você procura?"/>
                <img src={search} alt="Magnifier Icon"/>
            </div>
        </header>
    )
}

export default Header