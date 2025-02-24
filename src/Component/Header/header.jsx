import styles from "./header.module.css"

const Header = () => {
    return <div className={styles.header}>
        <div className={styles.iconWrap}>
            <img src="/src/images/instagram.png" />
            <img src="/src/images/instagram.png" />
            <img src="/src/images/instagram.png" />
            <img src="/src/images/instagram.png" />
        </div>
        <div>
            <h1>News For Today</h1>
        </div>
        <div>
            <a href="tel:989717515"><img src="" />(989)717-515</a>
        </div>
    </div>
}

export default Header;