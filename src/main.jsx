import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './sass/index.scss';
import { UserProvider } from './context/user_context';
import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { Auth0Provider } from '@auth0/auth0-react';
import { AuthWrapper } from './pages';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Auth0Provider
            domain='dev-l3swv25f.us.auth0.com'
            clientId='QxLx3tCZqUemGgUp7cnLe6fexaAPgmCW'
            authorizationParams={{
                redirect_uri: window.location.origin,
            }}
            // redirectUri={window.location.origin}
            // cacheLocation='localstorage'
            //callback URLs in vercel environment : https://furniture-react-5thnkkdpg-badaovz.vercel.app
        >
            <UserProvider>
                <ProductsProvider>
                    <FilterProvider>
                        <CartProvider>
                            <AuthWrapper>
                                <App />
                            </AuthWrapper>
                        </CartProvider>
                    </FilterProvider>
                </ProductsProvider>
            </UserProvider>
        </Auth0Provider>
    </React.StrictMode>,
);
