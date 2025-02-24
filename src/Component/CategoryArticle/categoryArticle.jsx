import { articles } from "../../assets/data/data"

const CategoryArticle = ({category}) => {

    const filteredArticles = articles.filter(item => item.category === category).slice(0, 3);

    return (
        <>
            {filteredArticles.map((item, index) => (
                <p key={index}>{item.headline}</p>
                ))}
        </>
    )
}

export default CategoryArticle;