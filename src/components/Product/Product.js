import { useState, useMemo } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import styles from './Product.module.scss';

const Product = ({ id, name, title, basePrice, colors, sizes }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const price = useMemo(() => {
    const sizePrice = sizes.find(size => size.name === currentSize).additionalPrice;
    return basePrice + sizePrice;
  }, [basePrice, currentSize, sizes]);

  return (
    <article className={styles.product}>
      <ProductImage name={name} title={title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <ProductForm
          basePrice={basePrice}
          colors={colors}
          sizes={sizes}
          title={title}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
        />
      </div>
    </article>
  );
};

export default Product;

