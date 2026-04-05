import { useContext, useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import casaIcon from "../assets/casa-icon.png";
import añadirIcon from "../assets/anadir.png";
import restarIcon from "../assets/menosIcon.png"
import "../styles/store.css"
import { Link } from "react-router";
import { ProductContext } from "../context/productContext";

function Store(){

    const {products, error, loading} = useProducts();
    const {counter, increment, productsBuy, cant, setCounter,  setProductsBuy, setCant} = useContext(ProductContext)



    if(loading) return <p>Loading...</p>
    if(error) return <p>Server Error</p>

    function ProductsToBuy(item){
        if(cant == 0){
            
            alert("Agrege la cantidad de unidades")
        }
        else{
            setProductsBuy([...productsBuy, {img: item.image, nombre: item.brand, price: item.price, cant: cant}])
            alert("producto agregado con exito")
            
        }
    }

    function handlePlusCant(){
        setCant((prev) => prev + 1)
    }

    function handleSubstracCant(){
        if(cant > 0){
            setCant((prev) => prev - 1)
        }
        else{
            setCant(0)
        }
    }

    

    
    return(
        <>
            <nav className="nav-store">
                <h2>Products</h2>
                <Link to="/"><img src={casaIcon} alt="casa icon" /></Link>
            </nav>
            <div className="products">
                <div className="products-cards">
                    {products.map((items, index) => {
                        return(
                            <div className="products-info">
                                <h3>{items.brand}</h3>
                                <img key={items._id}src={items.image} alt="" />
                                <p>{items.title}</p>
                                <p>Price: {items.price}</p>
                                <div className="cant-container">
                                    <img onClick={() => handleSubstracCant()} src={restarIcon} alt="icon de restar cantidad" />
                                    <p>{cant}</p>
                                    <img onClick={() => handlePlusCant()} src={añadirIcon} alt="icon de sumar cantidad" />

                                </div>
                                <button onClick={() => ProductsToBuy(items)}>Agregar al carrito</button>
                            </div>
                        )
                    })}    
                </div>
                
            </div>
            
        </>
    )
}


export default Store;