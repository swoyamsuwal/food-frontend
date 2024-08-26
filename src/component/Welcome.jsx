import React, { useState } from 'react'
import PropTypes from 'prop-types'


function Welcome(props) {
  const [login, setLogin] = useState(true)

  
  const handleLogin = ()=>{
    setLogin(!login)
  }

      return (
        <>

        <button onClick={handleLogin}>{login?"Login":"Logout"}</button>

         {(login) && 
         <>
          <div className='welcomeMain'>
            <h1 className='welcome'>{props.title}</h1>
            <p>number of students: {props.studentNumber}</p>
          </div>
        </> }
        
        {(!login) && <h1>Not logged IN</h1> }
        
        </> 
      )
  }


Welcome.propTypes = {
  title: PropTypes.string,
  studentNumber: PropTypes.number
}

Welcome.defaultProps = {
  title: "Class information must be provided here",
  studentNumber: "Not provided"

}



export default Welcome