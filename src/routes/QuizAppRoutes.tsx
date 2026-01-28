import { Route, Routes } from "react-router-dom";
import { Login } from "../components/Login";
import { Header } from "../components/Header";
import { CssBaseline } from "@mui/material";
import { CreateQuiz } from "../components/CreateQuiz";
import { User } from "../components/User";
import { Admin } from "../components/Admin";
import { PlayQuiz } from "../components/PlayQuiz";
import { About } from "../components/About";
import { Help } from "../components/Help";
import { Profile } from "../components/Profile";
import { Account } from "../components/Account";
import ProtectedRoute from "../components/ProtectedRoute";

export const QuizAppRoutes = () => {
  return (
    <div>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/user" element={<User />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/create-quiz" element={<CreateQuiz />} />
          <Route path="/play-quiz" element={<PlayQuiz />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/account" element={<Account />} />
        </Route>
      </Routes>
    </div>
  );
};
