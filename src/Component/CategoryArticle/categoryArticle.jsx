import { articles } from "../../assets/data/data"
import styles from "./categoryArticle.module.css"

const CategoryArticle = ({category, title}) => {

    const filteredArticles = articles.filter(item => item.category === category).slice(0, 3);

    return (
        <div>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.horizontal}>
            {filteredArticles.map((item, index) => (
                <div className={styles.article}>
                    <img src={`/images/${item.image}`} />
                    <h2>{item.headline}</h2>
                    <p key={index}>{item.deck}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default CategoryArticle;