import React, {useState} from "react";
import { useEffect } from "react";
import ProductItem from "../../Components/ProductItem";
import productsApi from "../../lib/productsApi";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getAllProducts = async () => {
            const data = await productsApi.getAllProducts();
            setProducts(data);
        }
        getAllProducts();
    }, []);

  return (
    <>
      <h1>Lista de productos</h1>
      <ul className="list-group">
        {products && products.map((product) => {
            return(
                <ProductItem key={product.id} productObject={product} />
            )
        })}
      </ul>
    </>
  );
};

export default Products;
