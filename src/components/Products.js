import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom"
import Product from "./Product";

const Products = ({ filter = p => p }) => {

  let [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      setProducts(await getProducts())
    })();
  }, [products])

  return (
    <div className="product-container">
      {products.map((product) => {
        return <Link to={"product/" + product.id} key={product.id}>
          <Product product={product} ></Product>
        </Link>
      })}

    </div>
  )

}

async function getProducts() {
  const response = await fetch("http://localhost:8080/products")
  const data = await response.json();
  return data;
}

export default Products;