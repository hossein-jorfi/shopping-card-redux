import React from 'react';

// Componets
import NavBar from './components/NavBar';
import Products from './components/Products';
import Detail from './components/Detail';
import Cart from './components/Cart';

// Css
import './App.css'

// Redux
import store from './redux/store';
import { Provider } from 'react-redux';

// Router
import { Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
     return (
          <Provider store={store}>
               <>
               <NavBar />
                    <Routes>
                         <Route path='/products/:id' element={<Detail />} />
                         <Route path='/products' element={<Products />} />
                         <Route path='/cart' element={<Cart />} />
                         <Route path='/*' element={<Navigate to='/products' />} />
                    </Routes>
               </>
          </Provider>
     );
};

export default App;