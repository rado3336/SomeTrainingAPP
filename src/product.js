function Product({product, onClickHandler}) {
  return (<div>
    <h2>{product.name}</h2>
    <div>{product.price} CZK</div>
    <button onClick={() => onClickHandler(product)}>Buy</button>
  </div>);
}

export default Product;