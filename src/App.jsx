import React from "react";
import "./App.css";

//COMPONENTS

import Header from "./components/Header/Header";
import CardProd from "./components/CardProd/CardProd";
import Footer from "./components/Footer/Footer";
const name="Ezequiel Bengoechea";

class App extends React.Component {
  render(){
    return(
      <div className="App">
        <Header />
        <div className="entrada">
          <h2>Promociones!</h2>
          <h3>Disponibles</h3>
          <div className="contenedorFlex">
            
            <CardProd 
              img={"https://3.bp.blogspot.com/-CwYyJBH4Vwc/WytAL1Uw73I/AAAAAAAAeUc/pQZT6aHaMmgQVQ4-fkvLeawqadSEsXtZQCLcBGAs/s1600/cocktail-barmaninred.jpg"}
              prodName="Campari"  
              description="Un Trago autentico, Refrescante en esas noches de verano"
            />
            
            
            <CardProd 
              img="https://media.ambito.com/p/cfe1ae2e02e935f54a559172e435522f/adjuntos/239/imagenes/040/703/0040703614/sex-on-the-beachjpg.jpg"
              prodName="Sex on he Beach"
              description="Un trago con vodka y un gusto a naranja y un dulce sabor a frutilla inolvidable"
            />

            <CardProd 
              img="https://media.ambito.com/p/cfe1ae2e02e935f54a559172e435522f/adjuntos/239/imagenes/040/703/0040703614/sex-on-the-beachjpg.jpg"
              prodName="Sex on he Beach"
              description="Un trago con vodka y un gusto a naranja y un dulce sabor a frutilla inolvidable"
            />

            <CardProd 
              img="https://media.ambito.com/p/cfe1ae2e02e935f54a559172e435522f/adjuntos/239/imagenes/040/703/0040703614/sex-on-the-beachjpg.jpg"
              prodName="Sex on he Beach"
              description="Un trago con vodka y un gusto a naranja y un dulce sabor a frutilla inolvidable"
            />
            
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )
  };
}


export default App;