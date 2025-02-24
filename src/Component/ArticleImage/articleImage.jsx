import styles from "./articleImage.module.css"

const ArticleImage = ({imagePath, newsTitle, newsText}) => {
    return (
        <div className={styles.imageArticle}>
            <img src={`/images/${imagePath}`} />
            <div>
                <h3>{newsTitle}</h3>
                <p>{newsText}</p>
            </div>
        </div>
    )
}

export default ArticleImage;