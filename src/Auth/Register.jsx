import React, { useState } from 'react';
import { TextField, Button, Container, Box, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
  const [username, setUsername] = useState('');

  const handleRegister = () => {
    // Perform login logic here
    console.log('Register clicked');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

  navigate('/otp');

  };

  return (
    <Box sx={{backgroundColor:"#526D82"}}>

    
    <Container maxWidth="xs"      
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      
    }}>
      <Card sx={{padding:"20px"}}>
      <h4>Regsiter</h4>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Phone Number / Email"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleRegister}
        >
          Register
        </Button>
      </form>
      </Card>
    </Container>
    </Box>
  );
};

export default Register;
