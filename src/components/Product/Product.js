import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = ({ title, basePrice, colors, sizes }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const handleColorChange = (color) => {
    console.log("Wybrany kolor:", color);
    setCurrentColor(color);
  };

  const handleSizeChange = (size) => {
    console.log("Wybrany rozmiar:", size);
    setCurrentSize(size);
  };



  // Ustalanie adresu obrazka na podstawie nazwy produktu i wybranego koloru
  const imageUrl = `${process.env.PUBLIC_URL}/images/products/shirt-${title.toLowerCase()}--${currentColor}.jpg`;


  console.log(imageUrl);

//Function for getting new prize after choosing option
const getPrice = () => {
  const selectedSize = sizes.find(size=> size.name === currentSize);
  return basePrice + (selectedSize ? selectedSize.additionalPrice : 0);
}

const handleSubmit = (event) => {
  event.preventDefault();
  console.log('Product Summary:');
  console.log('Name:', title);
  console.log('Price:', getPrice());
  console.log('Color:', currentColor);
  console.log('Size:', currentSize);
}

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={title} // Ustawienie właściwej wartości alt
          src={imageUrl} // Ustawienie adresu obrazka
        />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form onSubmit={handleSubmit}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map((size) => (
                <li key={size.name}>
                  <button
                    type="button"
                    className={clsx(styles.sizeButton, { [styles.active]: size.name === currentSize })}
                    onClick={() => handleSizeChange(size.name)}
                  >
                    {size.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map((color) => (
                <li key={color}>
                  <button
                    type="button"
                    className={clsx(styles.colorButton, { [styles.active]: color === currentColor })}
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorChange(color)}
                  />
                </li>
              ))}
            </ul>
          </div>
          <Button type="submit" className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  );
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired
    })
  ).isRequired
};

export default Product;