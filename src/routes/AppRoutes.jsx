import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Home from "../pages/user/Home";
import Cart from "../pages/user/Cart";
import ProductDetails from "../pages/user/ProductDetails";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminProducts from "../pages/admin/AdminProducts";
import AdminUsers from "../pages/admin/AdminUsers";
import UserLayout from "../components/layout/UserLayout";
import AdminLayout from "../components/layout/AdminLayout";
import { PrivateRoute, AdminRoute } from "./ProtectedRoutes";
import Checkout from "../pages/user/Checkout";
import OrderSuccess from "../pages/user/OrderSuccess";
import OrderHistory from "../pages/user/OrderHistory";
import AdminOrders from "../pages/admin/AdminOrders";

export default function AppRoutes() {
  return (
    <Routes>
      {/* AUTH PAGES (NO LAYOUT) */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* USER PAGES */}
      <Route element={<PrivateRoute />}>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/orders" element={<OrderHistory />} />
        </Route>
      </Route>

      {/* ADMIN PAGES */}
      <Route element={<AdminRoute />}>
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
        </Route>
      </Route>
    </Routes>
  );
}
