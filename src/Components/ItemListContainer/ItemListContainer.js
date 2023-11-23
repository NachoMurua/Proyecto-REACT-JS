import "./ItemList.css"


function handleClick (){
    console.log ("Click en boton")
}

function ItemList ({ greeting }){


    return (
        <div className="card" >
            <div className="cardDesing" >
                <img src="NikeReact"/>
                <h2>{greeting}</h2>
                <button onClick={handleClick} className="ButtonCarrito">Agregar al carrito</button>
            </div>
        </div>
    )

}

export default ItemList