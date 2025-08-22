import React from 'react'
import './loginsignup.css'

import userIcon from '../Assets/user.png'
import lockIcon from '../Assets/padlock.png'
import mailIcon from '../Assets/email.png'

const Loginsignup = () => {
  const [action, setAction] = React.useState('Signup'); // Default mode

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      {/* Username only in Signup */}
      {action === "Signup" && (
        <div className="inputs">
          <div className="input">
            <img src={userIcon} alt="" />
            <input type="text" placeholder="Username" />
          </div>
        </div>
      )}

      <div className="inputs">
        <div className="input">
          <img src={mailIcon} alt="" />
          <input type="email" placeholder="Email" />
        </div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={lockIcon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>

      {/* Forgot Password only in Login */}
      {action === "Login" && (
        <div className="forgot-password">
          Forgot Password? <span>Click Here</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === 'Login' ? 'submit gray' : 'submit'}
          onClick={() => setAction('Signup')}
        >
          Signup
        </div>
        <div
          className={action === 'Signup' ? 'submit gray' : 'submit'}
          onClick={() => setAction('Login')}
        >
          Login
        </div>
      </div>
    </div>
  )
}

export default Loginsignup;
