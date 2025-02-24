import { articles } from "../../assets/data/data"
import styles from "./recentNews.module.css"

const RecentNews = ({numberOfNews, title}) => {
  return (
    <div>
      <h2 className={styles.underline}>{title}</h2>
      {articles.slice(0, numberOfNews).map((item, index) => (
        <p key={index} className={styles.newsItem}>
          {item.deck}
        </p>
      ))}
    </div>
  )
}

export default RecentNews;
