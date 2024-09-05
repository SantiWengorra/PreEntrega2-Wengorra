import React from 'react';
import { useParams } from "react-router-dom";
import productos from "../Arrays/Products";
import ItemsListContainer from "../Components/ItemsListContainer/ItemsListContainer";
import Categorias from '../Arrays/Categories';

function Categoria() {
    const { categoryId } = useParams();
    const category = Categorias.find(c => c.categoryId === categoryId);
    const categoryName = category ? category.category : "N/A";
    const productosFiltrados = productos.filter(producto => producto.categoryId === categoryId);

    return (
        <div>
            <h2 className="text-primary font-weight-bold p-2 mt-3">Categoría {categoryName}:</h2>
            <ItemsListContainer productos={productosFiltrados} />
        </div>
    );
}

export default Categoria;
