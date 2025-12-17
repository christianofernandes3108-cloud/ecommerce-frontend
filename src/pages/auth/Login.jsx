import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import Button from "../../components/common/Button";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();

  function onSubmit(data) {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (u) => u.email === data.email && u.password === data.password
    );

    if (!foundUser) {
      toast.error("Invalid email or password");
      return;
    }

    login(foundUser);
    localStorage.setItem("currentUser", JSON.stringify(foundUser));

    toast.success(`Welcome back, ${foundUser.name}`);

    navigate(foundUser.role === "admin" ? "/admin" : "/");
  }

  return (
    <div className="auth-screen">
      <div className="auth-box">
        <h2>Sign in to BlueShop</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("email")} className="input" placeholder="Email" />
          <input
            type="password"
            {...register("password")}
            className="input"
            placeholder="Password"
          />
          <Button type="submit">Sign In</Button>
        </form>

        <p style={{ marginTop: 20, textAlign: "center" }}>
          Don’t have an account?{" "}
          <Link to="/signup" style={{ color: "#2563eb", fontWeight: 600 }}>
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
