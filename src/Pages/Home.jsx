import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('login') === null) {
      navigate('/login');
    }
  }, []);

  return (
    <Container>
      <div>
        <h1>Home Page</h1>
        <h4>Welcome To Your Home Page</h4>
      </div>
    </Container>
  );
}

export default Home;