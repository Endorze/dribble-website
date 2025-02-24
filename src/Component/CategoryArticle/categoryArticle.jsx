import { articles } from "../../assets/data/data"
const CategoryArticle = () => {
    return (
        <>
            {articles.map((item, index) => <p>{item.headline}</p>)}
        </>
    )
}

export default CategoryArticle;