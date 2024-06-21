import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';
import styles from './Products.module.scss';

const Products = () => {
  const [products] = useState(productsData);

  return (
    <section className={styles.products}>
      <ul>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
