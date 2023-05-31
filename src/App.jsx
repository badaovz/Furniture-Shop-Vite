import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import { Layout, PathNotFound } from './components';
import { About, Cart, Checkout, Home, Products, SingleProduct } from './pages';

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route
                        path='products'
                        element={<Products path={['home', '/products']} />}
                    />
                    <Route
                        path='products/:id'
                        element={<SingleProduct path={['home', '/products']} />}
                    />
                    <Route
                        path='about'
                        element={<About path={['home', '/about']} />}
                    />
                    <Route
                        path='cart'
                        element={<Cart path={['home', '/cart']} />}
                    />
                    <Route
                        path='checkout'
                        element={<Checkout path={['home', '/checkout']} />}
                    />
                    <Route path='*' element={<PathNotFound />} />
                </Route>
            </Route>,
        ),
    );

    return <RouterProvider router={router} />;
}

export default App;
