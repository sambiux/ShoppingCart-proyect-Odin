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



    
    return(
        <>
            <nav className="nav-store">
                <h2>Cart</h2>
                <Link to="/"><img src={casaIcon} alt="casa icon" /></Link>
            </nav>

            <div className="cartShop-container">
            <div>
                <h2>Your Shopping Cart</h2>
            </div>
            {productsBuy.map((item, index) => {
                return(
                    
                    <div className="cartShop-cards">
                        <img src={item.img} alt="" />
                        <p>{item.nombre}</p>
                        <p>Subtotal: {item.price}</p>
                        {productsBuy.length == 0 ? (
                            <h2>Por ahora nada por aqui!</h2>
                        ):(
                            <p>Cantidad: {cant}</p>
                        )}
                    </div>
                )
            })}
            <div>
                <h2>orden Summary</h2>
                <p>Subtotal: {productsBuy.price}</p>
            </div>
            </div>
        </>
    )

    
}

export default Cart;