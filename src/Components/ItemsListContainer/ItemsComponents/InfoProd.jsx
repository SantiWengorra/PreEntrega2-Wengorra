function InfoProd({prod, detalles}) {
    return <>
            <div className="card-body d-flex flex-column text-center">
            <h5 className="card-title text-truncate" style={{ minHeight: '25px'}}>{prod}</h5>
            <p className="card-text" style={{ maxHeight: '200px', overflow: 'scroll', overflowX: "hidden", overflowY: "auto" }}>{detalles}</p>
            </div>
    </>
}

export default InfoProd;