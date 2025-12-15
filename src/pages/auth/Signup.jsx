import { useForm } from "react-hook-form";


export default function Signup() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Create Account</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("firstName")}
          placeholder="First Name"
        />

        <input
          {...register("lastName")}
          placeholder="Last Name"
        />

        <input
          type="email"
          {...register("email")}
          placeholder="Email"
        />

        <input
          {...register("phone")}
          placeholder="Phone Number"
        />

        <input
          type="password"
          {...register("password")}
          placeholder="Password"
        />

        <input
          type="file"
          {...register("avatar")}
        />

        <select {...register("role")}>
          <option value="">Select role</option>
          <option value="user">Regular User</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
