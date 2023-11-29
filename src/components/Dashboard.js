import React from 'react'

const Dashboard = ({onLogout}) => {
  return (
    <div>Dashboard
      <button onClick={onLogout}>log out</button>
    </div>
  )
}

export default Dashboard