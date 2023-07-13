const Product = ({ product }) => {
  return (
    <div className="product-box">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p className="price">{product.price}</p>

    </div>
  );
}

export default Product;