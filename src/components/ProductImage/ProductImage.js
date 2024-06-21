import styles from './ProductImage.module.scss';

const ProductImage = ({ name, title, currentColor }) => {
  
  const imageUrl = `${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`;

  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        alt={title}
        src={imageUrl}
      />
    </div>
  );
};

export default ProductImage;

