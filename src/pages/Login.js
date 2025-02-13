import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff, Google } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import CustomTextField from "../components/shared/CustomTextField"; // Import the reusable component
import LoginHeaderImg from "../assets/images/login1.svg";
import LoginBottomImg from "../assets/images/login2.svg";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="80vh"
    >
      {/* Background Images */}
      <img
        src={LoginHeaderImg}
        className="login-header-img"
        alt="Header Decoration"
      />
      <img
        src={LoginBottomImg}
        className="login-bottom-img"
        alt="Bottom Decoration"
      />

      <Card
        sx={{
          maxWidth: 400,
          p: 2,
          boxShadow: 3,
          position: "relative",
          zIndex: 2,
        }}
      >
        <CardContent>
          {/* Logo */}
          <Box display="flex" justifyContent="center" mb={2}>
            <img
              src="https://ezycrm.webezy.co.uk/assets/img/logo/logo.svg"
              alt="logo"
              width="160px"
            />
          </Box>

          <Typography variant="h6" align="center" gutterBottom>
            Welcome to Naya CRM! 👋
          </Typography>
          <Typography variant="body2" align="center" color="textSecondary">
            Please sign in to your account and start the adventure
          </Typography>

          {/* Login Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <CustomTextField
              label="Email or Username"
              register={register("email", {
                required: "Email or Username is required",
              })}
              error={errors.email}
              helperText={errors.email?.message}
            />

            <CustomTextField
              label="Password"
              type={showPassword ? "text" : "password"}
              register={register("password", {
                required: "Password is required",
              })}
              error={errors.password}
              helperText={errors.password?.message}
              endAdornment={
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              }
            />

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <FormControlLabel
                control={<Checkbox {...register("remember")} />}
                label="Remember Me"
              />
              <Link
                to="/forgot-password"
                style={{ textDecoration: "none", color: "#1976d2" }}
              >
                <Typography variant="body2">Forgot Password?</Typography>
              </Link>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, backgroundColor: "#1ea389" }}
            >
              Sign in
            </Button>
          </form>

          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            New on our platform?{" "}
            <Link
              to="/sign-up"
              style={{ textDecoration: "none", color: "#1976d2" }}
            >
              Create an account
            </Link>
          </Typography>

          <Button
            fullWidth
            variant="outlined"
            startIcon={<Google />}
            sx={{ mt: 2 }}
            href="https://ezycrm.webezy.co.uk/login/social/google"
          >
            Sign in with Google
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
