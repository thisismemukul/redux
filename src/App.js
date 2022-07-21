import React from 'react'
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductContainer from './components/ProductContainer';
import HooksProductContainer from './components/HooksProductContainer';
import LoginContainer from './components/LoginContainer';
import NewProductContainer from './components/NewProductContainer';
import ItemContainer from './components/ItemContainer';

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <ItemContainer product />
        <ItemContainer />
        <ProductContainer />
        <HooksProductContainer />
        <LoginContainer />
        <NewProductContainer />
      </div>
    </Provider>
  )
}

export default App