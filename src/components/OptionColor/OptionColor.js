import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './OptionColor.module.scss';

const OptionColor = ({ colors, currentColor, handleColorChange }) => {
  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {colors.map(color => (
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
  );
};

OptionColor.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentColor: PropTypes.string.isRequired,
  handleColorChange: PropTypes.func.isRequired,
};

export default OptionColor;
