import React from 'react'

import { useNavigate } from 'react-router-dom';
const Home = ({ onLogin }) => {
  const navigate = useNavigate();
  const navigatelogin = () => {


    navigate('/login');
  };
  return (
    <>

      <div>Welcome Home</div>
      <button onClick={navigatelogin}
      >Login</button>

    </>
  )
}

export default Home