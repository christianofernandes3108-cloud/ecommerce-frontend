import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Home from "../pages/user/Home";
import AdminDashboard from "../pages/admin/AdminDashboard";
import UserLayout from "../components/layout/UserLayout";

export default function AppRoutes() {
  return (
<Routes>
  <Route element={<UserLayout />}>
    <Route path="/" element={<Home />} />
  </Route>

  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/admin" element={<AdminDashboard />} />
</Routes>
  );
}
