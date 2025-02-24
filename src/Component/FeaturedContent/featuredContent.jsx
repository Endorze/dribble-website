import { articles } from "../../assets/data/data";
import ArticleImage from "../ArticleImage/articleImage";
import RecentNews from "../RecentNews/recentNews";
import styles from "./featuredContent.module.css"

const FeaturedContent = () => {
    return (
        <div className={styles.featured}>
            <div className={styles.sideContent}>
            <RecentNews numberOfNews={4} title={"Recent News"} />
            </div>
            {articles.slice(0, 1).map((item, index) => (
                <div className={styles.featuredContent}>
                    <img
                        key={index}
                        alt={item.title}
                        src={`/images/${item.image}`}
                    />
                    <h2>In focus: {item.deck}</h2>
                    <p>{item.story}</p>
                </div>
            ))}
               <div className={styles.sideContent}>
                {articles.slice(0, 2).map((item, index) => (
                    <ArticleImage key={index} imagePath={item.image} newsTitle={item.headline} newsText={item.deck}/>
                ))}
               </div>
        </div>
    )
}

export default FeaturedContent;