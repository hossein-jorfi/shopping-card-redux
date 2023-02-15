import React from 'react';

// Componets
import NavBar from './components/NavBar';
import TopBanner from './components/TopBanner';
import Products from './components/Products';

// Css
import './App.css'

// Redux
import store from './redux/store';
import { Provider } from 'react-redux';

const App = () => {
     return (
          <Provider store={store}>
               <NavBar />
               <TopBanner />
               <Products /> 
          </Provider>
     );
};

export default App;