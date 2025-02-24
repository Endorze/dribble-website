import BreakingNews from "../BreakingNews/breakingNews";
import Header from "../Header/header"
import Navbar from "../Navbar/navbar";

const Mainsection = () => {
    return <div>
        <Header />
        <Navbar />
        <BreakingNews news1={"International Migrants Day"} news2={"Fifa world Cup"} news3={"Johnny Depp reprises Jack Sparrow"}/>
    </div>
}

export default Mainsection;