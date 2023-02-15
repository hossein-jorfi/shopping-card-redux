import React from 'react';

// Componets
import NavBar from './components/NavBar';
import TopBanner from './components/TopBanner';
import Products from './components/Products';

// Css
import './App.css'

const App = () => {
     return (
          <div>
               <NavBar />
               <TopBanner />
               <Products /> 
          </div>
     );
};

export default App;