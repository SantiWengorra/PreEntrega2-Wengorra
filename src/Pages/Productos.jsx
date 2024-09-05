import { useParams } from "react-router-dom";
import ItemsDetailContainer from "../Components/ItemsDetailContainer/ItemsDetailContainer";

function Productos() {

    const { productId } = useParams();

    return (
        <>
            <ItemsDetailContainer productId={productId}/>
        </>
    )
}

export default Productos;