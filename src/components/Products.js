import { useEffect, useState } from "react";

const Products = ({ filter = p => p }) => {

  let [products, setProducts] = useState([{
    id: 1,
    name: "Product 1",
    price: 1000,
    description: "This is a product 1",
  }, {
    id: 2,
    name: "Product 2",
    price: 1000,
    description: "This is a product 2",
  }, {
    id: 3,
    name: "Product 3",
    price: 1000,
    description: "This is a product 3",
  }])

  products = products.filter(filter)

  useEffect(()=>{
    console.log(products)
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