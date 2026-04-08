import { useContext, useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import casaIcon from "../assets/casa-icon.png";
import onAdd from "../assets/anadir.png";
import onRemove from "../assets/menosIcon.png"
import "../styles/store.css"
import { Link } from "react-router";
import { ProductContext } from "../context/productContext";


function Store(){

    const {products, error, loading} = useProducts();
    const {counter, increment, productsBuy, cant, setCounter,  setProductsBuy, setCant} = useContext(ProductContext)
    const [cantidades, setCantidades] = useState({});



    if(loading) return <p>Loading...</p>
    if(error) return <p>Server Error</p>


    function handlePlusCant(id){
    setCantidades(prev => ({
        ...prev,
        [id]: (prev[id] || 0) + 1
    }));
}

function handleSubstracCant(id){
    setCantidades(prev => ({
        ...prev,
        [id]: Math.max((prev[id] || 0) - 1, 0)
    }));
}

    function ProductsToBuy(item){
    const cantidad = cantidades[item._id] || 0;

    if(cantidad === 0){
        alert("Agrege la cantidad de unidades");
    } else {
        setProductsBuy([
            ...productsBuy,
            {
                img: item.image,
                nombre: item.brand,
                price: item.price,
                cant: cantidad
            }
        ]);

        alert("producto agregado con exito");
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
                    {products.map((items) => (
                    <ProductCard
                        key={items._id}
                        item={items}
                        cantidad={cantidades[items._id] || 0}
                        onAdd={() => handlePlusCant(items._id)}
                        onRemove={() => handleSubstracCant(items._id)}
                        onBuy={() => ProductsToBuy(items)}
                    />
                    ))}
                </div>
                
            </div>
            
        </>
    )
}


export default Store;