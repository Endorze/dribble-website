import styles from "./header.module.css"

const Header = () => {
    return <div className={styles.header}>
        <div className={styles.iconWrap}>
            <img src="/images/instagram.png" />
            <img src="/images/instagram.png" />
            <img src="/images/instagram.png" />
            <img src="/images/instagram.png" />
        </div>
        <div>
            <h1>News For Today</h1>
        </div>
            <a className={styles.phoneButton} href="tel:989717515"><img src="/images/phone.png" /><p>(989)717-515</p></a>
    </div>
}

export default Header;