import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GetProductAction } from  '../redux'

const HooksProductContainer = () => {
    const numOfProducts = useSelector(state => state.numOfProducts)
    const dispatch = useDispatch();
    return (
        <>
            <h3>No of Products- {numOfProducts}</h3>
            <button onClick={()=>dispatch(GetProductAction())}>Buy product using hooks </button>
        </>
    )
}

export default HooksProductContainer