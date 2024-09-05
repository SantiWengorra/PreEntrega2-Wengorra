import React from 'react';
import { useParams } from "react-router-dom";
import productos from "../Arrays/Products";
import ItemsDetailContainer from "../Components/ItemsDetailContainer/ItemsDetailContainer";

function Productos() {

    const { productId } = useParams();
    const product = productos.find(p => p.productId === productId);
    const productName = product ? product.prod : "N/A";
    const productDetail = product ? product.detalles : "N/A";
    const productImg = product ? product.img : "N/A";
    const productPrice = product ? product.precio : "N/A";
    

    return (
        <>
            <ItemsDetailContainer 
            productName={productName} 
            productImg={productImg}
            productDetail={productDetail} 
            productPrice={productPrice}/>
        </>
    )
}

export default Productos;