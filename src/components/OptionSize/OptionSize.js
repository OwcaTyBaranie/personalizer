import clsx from 'clsx';
import styles from './OptionSize.module.scss';

const OptionSize = ({ sizes, currentSize, handleSizeChange }) => {
  return (
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
  );
};

export default OptionSize;
