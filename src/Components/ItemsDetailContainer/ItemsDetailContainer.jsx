import ItemsDetail from "./ItemsDetailComponents/ItemsDetail";
import productos from "../../Arrays/Products";

function ItemsDetailContainer({productId}) {
    
    const product = productos.find(p => p.productId === productId);
    const productName = product ? product.prod : "N/A";
    const productDetail = product ? product.detalles : "N/A";
    const productImg = product ? product.img : "N/A";
    const productPrice = product ? product.precio : "N/A";
    

    
    return (<>
        <ItemsDetail 
        productName={productName} 
        productImg={productImg}
        productDetail={productDetail} 
        productPrice={productPrice}/>
        </>
    )
}

export default ItemsDetailContainer;