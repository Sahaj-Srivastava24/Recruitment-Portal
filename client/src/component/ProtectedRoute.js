import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import UserContext from '../component/UserContext';


export default function ProtectedRoute({ component: Component, ...restOfProps}) {
    const { user } = useContext(UserContext)
    const isAuth = user.login; 
    return (
        <Route
            {...restOfProps}
            render={(props) => {
                if(isAuth)
                    return (<Component {...props} />)
                else
                    return (<Redirect to='/' />)
            }}
        />
    )
}
