import ImageCard from "./ImageCard"
import InfoProd from "./InfoProd";
import {Link} from "react-router-dom"

function Card({prod, detalles, img, precio, productId}) {
    return <>
        <div className="card m-2" style={{ width: '100%', height: '500px' }}>
            <ImageCard img={img}/>
            <InfoProd prod={prod} detalles={detalles}/>
            <b className="h4 text-primary card-body text-center font-weight-bold">${precio}</b>
            <Link className="text-light btn btn-primary" to={`/item/${productId}`}>Comprar</Link>
        </div>
    </>
}

export default Card;