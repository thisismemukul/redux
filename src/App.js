import React from 'react'
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductContainer from './components/ProductContainer';

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <ProductContainer />
      </div>
    </Provider>
  )
}

export default App