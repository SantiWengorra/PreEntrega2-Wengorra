import { useState } from "react";

function ItemsCount() {
    const [contador, setContador] = useState(0);
    var stock = 10; //! Agregar stock individual en cada producto

    return (<>
        <section className="d-flex align-items-center mt-3">
            <button 
                className="btn btn-outline-secondary me-2 ml-2"
                onClick={() => setContador(contador - 1)}
                disabled={contador === 0}
            >-</button>
            <span className="mx-2">{contador}</span>
            <button 
                className="btn btn-outline-secondary ms-2"
                onClick={() => setContador(contador + 1)}
                disabled={contador === stock}
            >+</button>
        </section>
        </>
    );
}

export default ItemsCount;