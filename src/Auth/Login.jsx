import React, { useState } from 'react';
import { TextField, Button, Container, Box, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get('username');
if(username=="0987654321"){
  navigate('/otp');
}else{
  alert('User Not Found');
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
      <form onSubmit={handleSubmit}>
        <TextField
          label="Phone Number / Email"
          variant="outlined"
          fullWidth
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
          required="true"
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          type="submit"
        >
          Login
        </Button>
      </form>
      </Card>
    </Container>
    </Box>
  );
};

export default Login;
