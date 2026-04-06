import { useContext, useState } from "react";
import { ProductContext } from "../context/productContext";
import { Link } from "react-router";
import casaIcon from "../assets/casa-icon.png";
import "../styles/cart.css"

function Cart(){

    
    const [cart, setCart] = useState([]);
    const [amount, setAmount] = useState(0);
    const {counter, cant , productsBuy} = useContext(ProductContext)
    const {showCant, setShowCant} = useState(false)

    const total= productsBuy.reduce((acumulador, productPrice) =>{
        return acumulador + productPrice.price;
    }, 0)

    
    return(
        <>
            <nav className="nav-store">
                <h2>Your Shopping Cart</h2>
                <Link to="/"><img src={casaIcon} alt="casa icon" /></Link>
            </nav>

            <div className="cartShop-container">
            {productsBuy.map((item, index) => {
                return(
                    
                    <div className="cartShop-cards">
                        <img src={item.img} alt="" />
                        <p>{item.nombre}</p>
                        <p>Subtotal: {item.price}</p>
                        {!productsBuy.length == 0 &&(
                            <p>Cantidad : {cant}</p>
                        )}
                        <button>Buy</button>
                    </div>
                )
            })}
            <div>
                {productsBuy.length == 0 ? (
                <h2>Por el momento nada por aqui!</h2>
            ):(
                <div className="pay-container">
                    <h2>Orden Summary</h2>
                    {productsBuy.map((item) => {
                        return(
                            <>
                                <li>{item.nombre}</li>
                                <p>Price: {item.price}</p>
                            </>
                        )
                    })}
                    <p className="price-total">Total: {total}</p>
                    <button>pay purchase</button>
                </div>
            )}
            </div>
            </div>
        </>
    )

    
}

export default Cart;