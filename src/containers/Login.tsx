import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { routerPath } from "../constants/routerPath";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    sessionStorage.setItem("user", username);
    navigate(routerPath.root);
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 8,
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={handleUsernameChange}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Login;
