import carrito from "./img/carrito.svg"

import "./CartWidget.css"


import { useState } from "react"

function CartWidget (){

    const [count] = useState([])
    
    return (
        <div>
            <img src={carrito} alt="carrito"/>
            <span>{count}</span>
        </div>
    )
}

export default CartWidget 