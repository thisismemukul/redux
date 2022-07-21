import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loginRequest } from  '../redux'

const LoginContainer = () => {
    const numOfUsers = useSelector(state => state.auth.numOfUsers)
    const dispatch = useDispatch();
    return (
        <>
            <h3>No of Users- {numOfUsers}</h3>
            <button onClick={()=>dispatch(loginRequest())}>Login new user </button>
        </>
    )
}

export default LoginContainer