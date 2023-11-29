import React from 'react'

const Login = ({ onLogin }) => {

  return (
    <div>
      <h1>Login</h1>

      <input placeholder='Email' />
      <input placeholder='Password' />
      <button onClick={onLogin}>Submit</button>

    </div>
  )
}

export default Login