import React, { useEffect, useState } from "react";
import {
  Box,
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
import { allUsers } from "../stub_db/stub_data_users";
import { ADMIN, USER } from "../constants/constants";
import { loginAction, roleAction, usersAction } from "../store/quizSlice";

type Role = "ADMIN" | "USER";

type InputDataType = {
  // role: Role;
  role: string;
  email: string;
  password: string;
};

const initialInputData: InputDataType = {
  role: USER,
  email: "",
  password: "",
};

export const Login: React.FC = () => {
  // const [role, setRole] = useState<Role>(USER);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [inputData, setInputData] = useState(initialInputData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersAction(allUsers));
  }, [dispatch]);

  const handleRoleChange = (
    _: React.MouseEvent<HTMLElement>,
    newRole: Role | null,
  ) => {
    if (newRole !== null) {
      // setRole(newRole);
      setInputData((x: any) => ({ ...x, role: newRole }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate auth logic
    localStorage.setItem("user_role", inputData.role);

    dispatch(loginAction(true));
    dispatch(roleAction(inputData.role));

    // Redirect based on role
    inputData.role === ADMIN ? navigate("/admin") : navigate("/user");
  };

  // const handleLogin = (e: React.FormEvent) => {
  //   alert(JSON.stringify(inputData));
  //   navigate("/create-quiz");
  // };

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

          <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              autoComplete="email"
              value={inputData.email}
              onChange={(e) =>
                setInputData((x: any) => ({ ...x, email: e.target.value }))
              }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              autoComplete="current-password"
              value={inputData.password}
              onChange={(e) =>
                setInputData((x: any) => ({ ...x, password: e.target.value }))
              }
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, py: 1.5, fontSize: "1rem" }}
              // onClick={handleLogin}
            >
              Login as {inputData.role}
            </Button>
          </Box>
        </Paper>
      </Container>

      <Footer />
    </div>
  );
};
