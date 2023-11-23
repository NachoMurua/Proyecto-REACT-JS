import NavBar from "./Components/NavBar/NavBar";
import ItemList from "./Components/ItemListContainer/ItemListContainer";

import NikeReact from "../src/imgProductos/NikeReact.png"
import Sliptream from "../src/imgProductos/sliptream.png"


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
                        <ItemList greeting={"Nike epic react 270"} img={Sliptream}/>
                        <ItemList greeting={"Adidas Yeezy 700"} img={NikeReact}/>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default App;