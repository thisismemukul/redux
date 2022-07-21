import React from 'react'
import { connect } from 'react-redux'
import { GetProductAction, loginRequest } from '../redux'

const ItemContainer = (props) => {
    return (
        <>
            <h2>Item - {props.item}</h2>
            <div>
                <button onClick={props.buyItem}>Buy Items</button>
            </div>
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.product
        ? state.product.numOfProducts
        : state.auth.numOfUsers
    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.product
        ? () => dispatch(GetProductAction())
        : () => dispatch(loginRequest())
    return {
        buyItem: dispatchFunction
    }
}

export default connect(
    // pass null to mapStateToProps if you don't want to use mapStateToProps
    mapStateToProps,
    mapDispatchToProps
)(ItemContainer)