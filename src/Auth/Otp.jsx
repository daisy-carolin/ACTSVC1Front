import React, { useState } from 'react';
import { TextField, Button, Container, Box, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    console.log('Login clicked');
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const otp = formData.get('otp');
if(otp=="4362"){
    localStorage.setItem('login','myapplogin')
  navigate('/');
}else{
  alert('OTP is incorrect');
}
    
    
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
      <h4>Enter Your OTP</h4>
      <form onSubmit={handleSubmit}>
        <TextField
          label="OTP"
          variant="outlined"
          fullWidth
          name="otp"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          type="submit"
        >
          SUBMIT
        </Button>
      </form>
      </Card>
    </Container>
    </Box>
  );
};

export default Login;
