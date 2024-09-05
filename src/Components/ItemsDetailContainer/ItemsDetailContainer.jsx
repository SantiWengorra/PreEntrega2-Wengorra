function ItemsDetailContainer({productName, productImg, productDetail, productPrice}) {
    return (<>
        <section className="container my-5">
            <article className="row">
                <div className="col-md-6">
                    <img 
                    src={productImg} 
                    alt={productName} 
                    className="img-fluid rounded shadow ofc"
                    style={{ width: '100%', height: '100%', maxHeigh: '100%' }} />
                </div>
                <div className="col-md-6">
                    <h1 className="display-4">{productName}</h1>
                    <p className="lead">{productDetail}</p>
                    <p className="h4 text-primary">Precio: ${productPrice}</p>
                    <button className="btn btn-primary btn-lg mt-3">Agregar al Carrito</button>
                </div>
            </article>
        </section>
        </>
    )
}

export default ItemsDetailContainer;