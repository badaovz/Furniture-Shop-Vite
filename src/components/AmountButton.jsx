import { FaMinus, FaPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';

function AmountButton({ amount, increase, decrease }) {
    console.log('sss sss');

    return (
        <div className='amountButton'>
            <button className='amountButton__dec' onClick={decrease}>
                <FaMinus />
            </button>
            <h3>{amount}</h3>
            <button className='amountButton__inc' onClick={increase}>
                <FaPlus />
            </button>
        </div>
    );
}

AmountButton.propTypes = {
    amount: PropTypes.number,
    increase: PropTypes.func,
    decrease: PropTypes.func,
};

export default AmountButton;
