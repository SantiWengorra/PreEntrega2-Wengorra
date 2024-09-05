import React from 'react';
import Card from "./ItemsComponents/Card";
import "./ItemsListContainer.css";

function ItemsListContainer({ productos }) {
    return (
        <div className="container-fluid row row-cols-1 row-cols-md-3 no-copy">
            {productos.length > 0 ? (
                productos.map(producto => (
                    <div className="col">
                        <Card
                            prod={producto.prod}
                            detalles={producto.detalles}
                            img={producto.img}
                            precio={producto.precio}
                            productId={producto.productId}
                            categoryId={producto.categoryId}
                        />
                    </div>
                ))
            ) : (
                <div className='container-fluid d-flex justify-content-center'>
                <p className='alert alert-info text-center'>No hay productos en esta categoría.</p>
                </div>
            )}
        </div>
    );
}

export default ItemsListContainer;