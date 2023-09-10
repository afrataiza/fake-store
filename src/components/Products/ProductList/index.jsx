import { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard";
import styles from './productList.module.css'

export function ProductList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProductList(data);
    };
    getProducts();
  }, []);

  return (
    <div className={styles.list_container}>
      {productList.length > 0 &&
        productList.map(({ id, title, price, image }) => (
          <ProductCard
            key={id}
            title={title}
            price={price}
            image={image}
          ></ProductCard>
        ))}
    </div>
  );
}
