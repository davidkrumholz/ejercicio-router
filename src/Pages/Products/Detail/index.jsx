
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsApi from "../../../lib/productsApi";
const ProductDetail = () => {
    const [productData, setProductData] = useState(null);
    const {productId} = useParams();

    useEffect(() => {
        const getproductById = async () => {
            const product = await productsApi.getProductById(productId);
            setProductData(product);
        }
        getproductById();
    }, [])
    return(
        <>
       <div className="d-flex justify-content-center container mt-5">
        <div className="card p-3 bg-white"><i className="fa fa-apple"></i>
            <div className="about-product text-center mt-2"><img src={productData.image} width="300"/>
                <div>
                    <h6 className="mt-0 text-black-50 p-3">{productData.title}</h6>
                    <p>{productData.description}</p>
                </div>
            </div>
            <div className="stats mt-2">
                <div className="d-flex justify-content-between p-price"><span>Categoría</span><span>{productData.category}</span></div>
                <div className="d-flex justify-content-between p-price"><span>Price</span><span>${productData.price}</span></div>
            </div>
        </div>
    </div>
        </>
    )
}

export default ProductDetail;