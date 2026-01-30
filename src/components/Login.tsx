import React, { useEffect, useState } from "react";
import {
  // Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { Footer } from "./Footer";

import { useDispatch } from "react-redux";
import { ADMIN, USER } from "../constants/constants";
import { allQuizCategoriesAction, allQuizIdsAction } from "../store/quizSlice";
import axios from "axios";
import { loginAction, roleAction } from "../store/authSlice";

type Role = "ADMIN" | "USER";

const fieldNames: string[] = ["email", "password"];
let initialInputData: any = {};
let initialErrorMessages: any = {};
Object.keys(fieldNames).forEach((key: string) => {
  initialInputData[key] = "";

  initialErrorMessages[
    `is${key.substring(0, 1).toUpperCase()}${key.substring(1)}Error`
  ] = false;
  initialErrorMessages[`${key}ErrorMessage`] = "";
});
initialInputData["role"] = "USER";

export const Login: React.FC = () => {
  const [inputData, setInputData] = useState(initialInputData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [errorMessages, setErrorMessages] = useState(initialErrorMessages);

  const getAllQuizIds = async () => {
    const url: string = "http://localhost:6004/api/questions/distinct/quiz-ids";
    try {
      const res: any = await axios.get(url);
      console.log({ res });
      if (res.data.length > 0) {
        dispatch(allQuizIdsAction([...res.data]));
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const onPageLoad = async () => {
    getAllQuizCategories();
    getAllQuizIds();
  };

  useEffect(() => {
    onPageLoad();
  }, []);

  const getAllQuizCategories = async () => {
    try {
      const url: string = "http://localhost:6004/api/quiz-categories";
      const res: any = await axios.get(url);
      if (res.data.length > 0) {
        dispatch(allQuizCategoriesAction([...res.data]));
      }
    } catch (error) {}
  };

  const validate = (name: string, value: string) => {
    let errMsg = "";
    switch (name) {
      case "email":
        if (!value) {
          errMsg = "Email should not be blank";
        } else if (value.length > 50) {
          errMsg = "Email should not be more than 50 characters";
        } else if (
          !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
        ) {
          errMsg = "incorrect email pattern";
        } else {
          errMsg = "";
        }
        break;
      case "password":
        // password regex /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
        if (!value) {
          errMsg = "Password should not be blank";
        } else if (value.length < 6) {
          errMsg = "Password should be minimum 6 characters";
        } else if (value.length > 20) {
          errMsg = "Password should be maximum 20 characters";
        } else {
          errMsg = "";
        }
        break;

      default:
        break;
    }
    setErrorMessages((x: any) => ({
      ...x,
      [`is${name.substring(0, 1).toUpperCase()}${name.substring(1)}Error`]:
        !!errMsg,
      [`${name}ErrorMessage`]: errMsg,
    }));
  };

  const handleRoleChange = (
    _: React.MouseEvent<HTMLElement>,
    newRole: Role | null,
  ) => {
    if (newRole !== null) {
      setInputData((x: any) => ({ ...x, role: newRole }));
    }
  };

  const handleTextChange = (event: any) => {
    const { name, value } = event.target;
    setInputData((x: any) => ({ ...x, [name]: value }));
    validate(name, value);
    console.log({ errorMessages });
  };

  const handleLogin = async (e: React.FormEvent) => {
    // e.preventDefault();
    // // Simulate auth logic
    // localStorage.setItem("user_role", inputData.role);

    // if (!errorMessages.isEmailError && !errorMessages.isPasswordError) {
    //   const request: any = {
    //     email: inputData.email,
    //     password: inputData.password,
    //   };

    //   console.log({ request });

    //   const res: any = await axios.post(
    //     "http://localhost:6004/api/users/authenticate",
    //     request,
    //   );
    //   console.log({ res });

    //   if (res.data.isAuthenticated) {
    //     dispatch(loginAction(true));
    //     dispatch(roleAction(inputData.role));

    //     // Redirect based on role
    //     inputData.role === ADMIN ? navigate("/admin") : navigate("/user");
    //   } else {
    //     if (res.data.errorMessage?.toLowerCase().includes("email")) {
    //       setErrorMessages({
    //         ...initialErrorMessages,
    //         isEmailError: true,
    //         emailErrorMessage: res.data.errorMessage,
    //       });
    //     } else {
    //       setErrorMessages({
    //         ...initialErrorMessages,
    //         isPasswordError: true,
    //         passwordErrorMessage: res.data.errorMessage,
    //       });
    //     }
    //     console.log("error : ", res.data.errorMessage);
    //   }
    // }

    dispatch(loginAction(true));
    dispatch(roleAction(inputData.role));

    // Redirect based on role
    inputData.role === ADMIN ? navigate("/admin") : navigate("/user");
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Paper
          elevation={6}
          sx={{
            mt: 4,
            mb: 4,
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: 3,
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            sx={{ mb: 3, fontWeight: "bold" }}
          >
            Sign In
          </Typography>

          <ToggleButtonGroup
            value={inputData.role}
            exclusive
            onChange={handleRoleChange}
            fullWidth
            sx={{ mb: 3 }}
            color="primary"
          >
            <ToggleButton value={USER}>
              <AccountCircleIcon sx={{ mr: 1 }} /> User
            </ToggleButton>
            <ToggleButton value={ADMIN}>
              <AdminPanelSettingsIcon sx={{ mr: 1 }} /> Admin
            </ToggleButton>
          </ToggleButtonGroup>

          {/* <Box component="form" onSubmit={handleLogin} sx={{ width: "100%" }}> */}
          <TextField
            id="email"
            name="email"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            autoComplete="email"
            value={inputData.email}
            error={errorMessages.isEmailError}
            helperText={errorMessages.emailErrorMessage}
            onChange={handleTextChange}
          />
          <TextField
            id="password"
            name="password"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            autoComplete="current-password"
            value={inputData.password}
            error={errorMessages.isPasswordError}
            helperText={errorMessages.passwordErrorMessage}
            onChange={handleTextChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, py: 1.5, fontSize: "1rem" }}
            onClick={handleLogin}
            // disabled={
            //   errorMessages.isEmailError || errorMessages.isPasswordError
            // }
            // this will disable after calling api also as we are assigning res.data.isAuthenticated to error messages
          >
            Login as {inputData.role}
          </Button>
          {/* </Box> */}
        </Paper>
      </Container>

      <Footer />
    </div>
  );
};
