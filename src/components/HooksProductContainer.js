import React from 'react'
import { useSelector } from 'react-redux'
const HooksProductContainer = () => {
    const numOfProducts = useSelector(state => state.numOfProducts)
    return (
        <>
            <h3>No of Products- {numOfProducts}</h3>
            <button>Buy product </button>
        </>
    )
}

export default HooksProductContainer