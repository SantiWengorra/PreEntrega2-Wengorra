import ItemsListContainer from "../Components/ItemsListContainer/ItemsListContainer";
import productos from "../Arrays/Products";

function Home(){
    return(
        <div>
            <ItemsListContainer productos={productos}/>
        </div>
    )
}

export default Home;