import styles from "./breakingNews.module.css"
import { articles } from "../../assets/data/data"

const BreakingNews = () => {
    return <div className={styles.breakingWrap}>
        <div className={styles.breakingNews}><p>Breaking News</p></div>
        <div className={styles.headlineWrap}>
            {articles.slice(0,3).map((item, index) => (
                <p>{item.headline}</p>
            ))}
        </div>
    </div>
}

export default BreakingNews