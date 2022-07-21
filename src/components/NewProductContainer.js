import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GetProductAction } from  '../redux'

const NewProductContainer = () => {
    const [number, setNumber] = useState(1)
    const numOfProducts = useSelector(state => state.product.numOfProducts)
    const dispatch = useDispatch();
    return (
        <>
            <h3>No of Products- {numOfProducts}</h3>
            <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)}/>
            <button onClick={()=>dispatch(GetProductAction(number))}>Buy {number} of products </button>
        </>
    )
}

export default NewProductContainer