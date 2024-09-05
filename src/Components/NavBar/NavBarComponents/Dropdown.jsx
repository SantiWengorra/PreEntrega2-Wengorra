import React from 'react';
import DropDownContent from "./DropDownContent";
import { Link } from "react-router-dom";
import categorias from "../../../Arrays/Categories";

function Dropdown() {
    return (
        <section className="dropdown-content d-flex justify-content-center bg-light">
            <div className="d-flex flex-column text-center">
                <Link className="text-primary hover-underline" to="./"><b>INICIO</b></Link>
                {categorias.map(categoria => (
                    <DropDownContent
                        category={categoria.category}
                        categoryId={categoria.categoryId}
                    />
                ))}
            </div>
        </section>
    );
}

export default Dropdown;
