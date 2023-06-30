import React from 'react'
import "./RegistrationPage.css"
import RegistrationForm from '../RegistrationForm/RegistrationForm'

const RegistrationPage = ({handleRegistration}) => {
  return (
    <div className = "registration-page">
      <RegistrationForm handleRegistration = {handleRegistration}/>

    </div>
  )
}

export default RegistrationPage
