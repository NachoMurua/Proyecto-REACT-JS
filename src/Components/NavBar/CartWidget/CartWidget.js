import carrito from "./img/carrito.svg"

import "./CartWidget.css"

function CartWidget (){
    return (
        <div>
            <img src={carrito} alt="carrito"/>
            <span>0</span>
        </div>
    )
}

export default CartWidget 