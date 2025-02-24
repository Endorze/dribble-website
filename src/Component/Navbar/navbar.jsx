import styles from "./navbar.module.css"

const Navbar = () => {
    return <div className={styles.navbar}>
            <img src="/src/images/instagram.png"></img>
            <a>Home</a>
            <a>International</a>
            <a>Business</a>
            <a>Politics</a>
            <a>Technology</a>
            <a>Fashion</a>
            <a>Corona</a>
            <a>Sports</a>
            <a>Video</a>
            <p>Monday, 02 February 2023</p>
    </div>
}

export default Navbar;