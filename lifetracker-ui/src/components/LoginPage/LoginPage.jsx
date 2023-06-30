import React from 'react'
import "./LoginPage.css"
import LoginForm from '../LoginForm/LoginForm'

const LoginPage = ({handleLogin, loginError}) => {
  return (
    <div className = "login-page">
      <LoginForm handleLogin = {handleLogin} loginError = {loginError} />
     
      
      
    </div>
  )
}

export default LoginPage
