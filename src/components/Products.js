import { useEffect, useState } from "react";

async function getProducts() {
  const response = await fetch("http://localhost:8080/products")
  const data = await response.json();
  return data;
}

const Products = ({ filter = p => p }) => {

  let [products, setProducts] = useState([]);

  useEffect(() => {
    (async ()=>{
      setProducts(await getProducts())
    })();
  }, [products])

  return (
    <div className="product-container">
      {products.map((product) => (
        <div className="product-box" key={product.id}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p className="price">{product.price}</p>

        </div>
      ))}
    </div>
  )

}

export default Products;