import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { formatPrice } from '../utils/helpers';
import PropTypes from 'prop-types';

function Product({ name, price, image, id }) {
    return (
        <div className='product'>
            <div className='product__container'>
                <img
                    src={image}
                    className='product__container__img'
                    alt='img'
                />
                <div className='product__container__box'>
                    <Link to={`/products/${id}`}>
                        <p className='product__container__box__icon'>
                            <FaSearch />
                        </p>
                    </Link>
                </div>
            </div>
            <div className='product__footer'>
                <p className='product__footer__name'>{name}</p>
                <p className='product__footer__price'>{formatPrice(price)}</p>
            </div>
        </div>
    );
}

Product.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    id: PropTypes.string,
};

export default Product;
