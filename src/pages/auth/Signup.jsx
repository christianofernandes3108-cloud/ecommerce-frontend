import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../../utils/signupSchema";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";

export default function Signup() {
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  function onSubmit(data) {
    const initials =
      data.name.charAt(0).toUpperCase() +
      data.surname.charAt(0).toUpperCase();

    const newUser = {
      id: crypto.randomUUID(), // ✅ FIX
      ...data,
      role: "user",
      avatar: preview || initials,
    };

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    toast.success("Account created successfully");
    navigate("/login");
  }

  function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  }

  return (
    <div className="auth-screen">
      <div className="auth-box">
        <h2>Create your BlueShop account</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} className="input" placeholder="First name" />
          {errors.name && <p className="error">{errors.name.message}</p>}

          <input {...register("surname")} className="input" placeholder="Last name" />
          {errors.surname && <p className="error">{errors.surname.message}</p>}

          <input {...register("email")} className="input" placeholder="Email address" />
          {errors.email && <p className="error">{errors.email.message}</p>}

          <input {...register("phone")} className="input" placeholder="Phone number" />
          {errors.phone && <p className="error">{errors.phone.message}</p>}

          <input
            type="password"
            {...register("password")}
            className="input"
            placeholder="Password"
          />
          {errors.password && <p className="error">{errors.password.message}</p>}

          <input type="file" accept="image/*" onChange={handleImageUpload} />

          <Button type="submit">Create Account</Button>
        </form>

        <p style={{ marginTop: 20, textAlign: "center" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#2563eb", fontWeight: 600 }}>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
