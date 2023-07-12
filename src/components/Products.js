import { useEffect, useState } from "react";



const Products = ({ filter = p => p }) => {

  let [products, setProducts] = useState([]);





  // useEffect(() => {
  //   console.log(products)
  // }, [products])

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