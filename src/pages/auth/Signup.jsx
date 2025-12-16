import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../../utils/signupSchema";
import { useState } from "react";

export default function Signup() {
  const [preview, setPreview] = useState(null);

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

    const user = {
      ...data,
      role: "user",
      avatar: preview || initials,
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful!");
  }

  function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Create Account</h2>

        <input {...register("name")} placeholder="Name" className="input" />
        {errors.name && <p className="error">{errors.name.message}</p>}

        <input {...register("surname")} placeholder="Surname" className="input" />
        {errors.surname && <p className="error">{errors.surname.message}</p>}

        <input {...register("email")} placeholder="Email" className="input" />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <input {...register("phone")} placeholder="Phone" className="input" />
        {errors.phone && <p className="error">{errors.phone.message}</p>}

        <input
          type="password"
          {...register("password")}
          placeholder="Password"
          className="input"
        />
        {errors.password && <p className="error">{errors.password.message}</p>}

        <input type="file" accept="image/*" onChange={handleImageUpload} />

        <button className="w-full bg-black text-white py-2 rounded">
          Sign Up
        </button>
      </form>
    </div>
  );
}
