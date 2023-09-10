/* eslint-disable react/prop-types */
import styles from './productCard.module.css';
export function ProductCard({ image, title, price }) {
  return (
    <div className={styles.card_container}>
      <img src={image} alt="imagem do produto" />
      <div className={styles.card_text}>
        <span>{title}</span>
        <strong>{`$ ${price}`}</strong>
      </div>
    </div>
  );
}
