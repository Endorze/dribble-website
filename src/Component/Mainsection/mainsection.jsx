import BreakingNews from "../BreakingNews/breakingNews";
import CategoryArticle from "../CategoryArticle/categoryArticle";
import Container from "../Container/container";
import { articles } from "../../assets/data/data";
import FeaturedContent from "../FeaturedContent/featuredContent";
import Header from "../Header/header"
import Navbar from "../Navbar/navbar";
import styles from "./mainsection.module.css"

const Mainsection = () => {
    return <div>
        <Header />
        <Navbar />
        <Container>
            <BreakingNews />
            <FeaturedContent />
            <CategoryArticle category={"sport"}/>
        </Container>
    </div>
}

export default Mainsection;