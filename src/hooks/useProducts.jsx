  import { useEffect, useState } from "react";

export function useProducts(){
    
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        fetch("https://fakestoreapiserver.reactbd.org/api/walmartproducts")
          .then((res) => res.json())
          .then((dataProd) => setProducts(dataProd.data))
          .catch((error) => setError(error))
          .finally(() => setLoading(false));
    }, [])

    return {products, setProducts, error, loading}
}