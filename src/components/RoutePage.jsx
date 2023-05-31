import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function RoutePage({ path }) {
    const lengthPath = path.length;
    const newPath = path.slice(0, lengthPath - 1);

    return (
        <div className='routerPage'>
            <section>
                <h3 className='routerPage__item'>
                    {newPath.map((p, index) => (
                        <li key={index}>
                            <Link to={p === 'home' ? '/' : p} key={index}>
                                <p className='routerPage__item__route'>{p}</p>
                            </Link>
                        </li>
                    ))}
                    <p className='routerPage__item__name'>
                        {path[lengthPath - 1]}
                    </p>
                </h3>
            </section>
        </div>
    );
}

RoutePage.propTypes = {
    path: PropTypes.array.isRequired,
};

export default RoutePage;
