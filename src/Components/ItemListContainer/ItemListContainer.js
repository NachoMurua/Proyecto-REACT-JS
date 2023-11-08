import "./ItemList.css"

function ItemList ({ greeting }){

    return (
        <div className="card">
            <div className="cardDesing">
                <img src="./imgProductos/NikeReact.png" alt="Zapatillas"/>
                <h2>{greeting}</h2>
                <button className="ButtonCarrito">Agregar al carrito</button>
            </div>
        </div>
    )

}

export default ItemList