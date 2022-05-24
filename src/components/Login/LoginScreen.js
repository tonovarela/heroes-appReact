import React, { useContext }  from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';
import { types } from '../types/types';


export const LoginScreen = () => {
    const navigate =useNavigate();
    const {dispatch}  = useContext(AuthContext);
    const handleLogin =()=>{        
        const action = {
            type:types.login,
            payload: {name:"Varela"}
        }
        dispatch(action)
        navigate('/',{replace:true});
    }
    return (
        <>
        <div className='container mt-5'>

            <h1>Login screen</h1>
            <hr></hr>
            <button onClick={handleLogin} className='btn btn-primary'>Login</button>
        </div>


        </>
    )
}
