import React from 'react'
import SleepForm from '../SleepForm/SleepForm'

const SleepPage = ({user_id, sleeptime, setStartTime, waketime, setEndTime}) => {
  return (
    <div>
        <SleepForm user_id = {user_id} sleeptime = {sleeptime} setStartTime = {setStartTime} waketime = {waketime} setEndTime = {setEndTime}/>
      
    </div>
  )
}

export default SleepPage
