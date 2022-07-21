import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from  '../redux'

const UserContainer = () => {
    const userData = useSelector(state => state.auth.users)
    console.log("userData", userData)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])    


    return userData.loading ? <div>Loading...</div> : userData.error ? <div>Error</div> : (
        <div>
            <h1>Users</h1>
            <ul>
                {userData.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>

    )

    // return (

    //     <>
        
    //         <h3>No of Products- {numOfProducts}</h3>
    //         <button onClick={()=>dispatch(fetchUsers())}>Buy product using hooks </button>
    //     </>
    // )
}

export default UserContainer