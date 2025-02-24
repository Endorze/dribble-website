import styles from "./breakingNews.module.css"

const BreakingNews = ({articles}) => {
    return <div className={styles.breakingWrap}>
        <div className={styles.breakingNews}>Breaking News</div>
        {articles}
    </div>
}

export default BreakingNews