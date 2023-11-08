import CartWidget from "./CartWidget/CartWidget"
import "./NavBar.css"

function NavBar (){

    return (

        <nav className="NavBar">
            <h1 className="Titulo">The Black Store</h1>
            <div>
                <button className="ButtonItem">Zapatillas</button>
                <button className="ButtonItem">Medias</button>
                <button className="ButtonItem">Cordones</button>
            </div>
            <CartWidget/>
        </nav>

    )

}

export default NavBar