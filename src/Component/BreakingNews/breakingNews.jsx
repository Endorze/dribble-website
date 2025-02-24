import styles from "./breakingNews.module.css"

const BreakingNews = ({news1, news2, news3}) => {
    return <div className={styles.breakingWrap}>
        <div className={styles.breakingNews}>Breaking News</div>
        <p>{news1}</p>
        <p>{news2}</p>
        <p>{news3}</p>
    </div>
}

export default BreakingNews