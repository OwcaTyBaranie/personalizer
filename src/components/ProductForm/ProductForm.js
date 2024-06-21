import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import Button from '../Button/Button';
import styles from './ProductForm.module.scss';

const ProductForm = ({ basePrice, colors, sizes, title, currentColor, setCurrentColor, currentSize, setCurrentSize }) => {
  const handleColorChange = (color) => {
    setCurrentColor(color);
  };

  const handleSizeChange = (size) => {
    setCurrentSize(size);
  };

  const getPrice = () => {
    const sizePrice = sizes.find(size => size.name === currentSize).additionalPrice;
    return basePrice + sizePrice;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Product: ${title}, Price: ${getPrice()}, Color: ${currentColor}, Size: ${currentSize}`);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <OptionSize sizes={sizes} currentSize={currentSize} handleSizeChange={handleSizeChange} />
      <OptionColor colors={colors} currentColor={currentColor} handleColorChange={handleColorChange} />
      <Button>
        <span className="fa fa-shopping-cart" /> Add to cart
      </Button>
    </form>
  );
};

export default ProductForm;
