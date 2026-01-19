import {Product} from "./Product.jsx";

export function ProductsGrid({products, loadCart}) {

  return (
    <Product key={products.id} products={products} loadCart={loadCart}/>
  );
}