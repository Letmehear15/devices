import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginPostRequest } from '../../api/generated'
import { loginRequest, selectAuthStatus } from '../../redux/modules/auth'
import { Login } from './Login'

export const LoginContainer = () => {
    const authStatus = useSelector(selectAuthStatus)
    const dispatch = useDispatch()

    const onLogin = (credentials: LoginPostRequest) => {
        dispatch(loginRequest(credentials))
    }

    return (
        <Login onLogin={onLogin} authStatus={authStatus}/>
    )
}
