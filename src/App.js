import NavBar from "./Components/NavBar/NavBar";
import ItemList from "./Components/ItemListContainer/ItemListContainer";

import NikeReact from "./Components/ItemListContainer/imgProductos/NikeReact.png"

import "bulma/css/bulma.css";

function App (){
    return (
        <div>
            <div className="App">
                <NavBar/>
            </div>
            
            <div className="container">
                <div className="columns">
                    <div className="columns is-3">
                        <ItemList greeting={"Nike epic react 270"} img={NikeReact} />
                        <ItemList greeting={"Adidas Yeezy 700"}/>
                        <ItemList greeting={"Puma Slipstream"}/>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default App;