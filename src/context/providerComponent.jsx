import { useState } from "react";
import { ProductContext } from "./productContext";
import { useProducts } from "../hooks/useProducts";

export function ProviderComponent({children}){


    const [counter, setCounter] = useState(0);
    const [productsBuy, setProductsBuy] = useState([])
    const [cant, setCant] = useState(1);
    
    
    
    

    return(
        <>
            <ProductContext.Provider value={{counter, setCounter, cant, setCant, productsBuy, setProductsBuy}}>
                {children}
            </ProductContext.Provider>
        </>
    )
}