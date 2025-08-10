import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const Signup = ({ setAuthToken }) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const nav = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    const userToAddToDB = {
      username,
      email,
      password,
    };
    try {
      const { data } = await axios.post(
        "http://localhost:5005/auth/signup",
        userToAddToDB
      );
      console.log("user added to DB", data);
      localStorage.setItem("authToken", data.authToken);
      setAuthToken(data.authToken);
      nav("/");
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };
  return (
    <div className="form-container">
      <h3>New Here?</h3>
      <h2>Sign Up to make a booking</h2>
      <Box
        component="form"
        className="signup-box"
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="error">{errorMessage}</p>
        <Button
          onClick={handleSignup}
          variant="outlined"
          endIcon={<SendIcon />}
          size="large"
        >
          Sign Up
        </Button>
      </Box>
    </div>
  );
};
