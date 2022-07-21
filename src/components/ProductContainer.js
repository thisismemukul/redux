import React from 'react'
import { GetProductAction } from  '../redux'
import { connect } from 'react-redux';

const ProductContainer = (props) => {
    console.log('ProductContainer props: ', props);
    return (
        <>
            <h3>No of Products {props.numOfProducts}</h3>
            <button onClick={props.GetProductAction} >Buy product </button>
        </>
    )
}

const mapStateToProps = (state) => {
    console.log('ProductContainer state: ', state);
    return {
        // products: state.products.products,
        numOfProducts: state.numOfProducts,
        // loading: state.products.loading,
        // error: state.products.error,
        // message: state.products.message,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // getAllProducts: () => dispatch(getAllProducts()),
        // getAllNewProducts: () => dispatch(getAllNewProducts()),
        GetProductAction: () => dispatch(GetProductAction()),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);