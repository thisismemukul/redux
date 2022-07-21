import React from 'react'
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductContainer from './components/ProductContainer';
import HooksProductContainer from './components/HooksProductContainer';
import LoginContainer from './components/LoginContainer';
import NewProductContainer from './components/NewProductContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <UserContainer />
        {/* <ItemContainer product />
        <ItemContainer />
        <ProductContainer />
        <HooksProductContainer />
        <LoginContainer />
        <NewProductContainer /> */}
      </div>
    </Provider>
  )
}

export default App