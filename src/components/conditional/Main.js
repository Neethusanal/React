import React from 'react'
import Logged from './Logged'
import NotLogged from './NotLogged'

const Main = ({IsLoggedin}) => {
  return (
    <div>
        {IsLoggedin?<Logged/>:<NotLogged/>}
    </div>
  )
}

export default Main