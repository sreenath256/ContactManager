import React from "react";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "../../utils/axios";
import { useDispatch, useSelector } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Email is not valid")
      .required("Please fill email"),
    password: yup.string().required("Please fill the password"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  const onSubmit = async (loginData) => {
    try {
      const res = await axios.post("user/login/", loginData);
      console.log("Login Response is ", res);

      localStorage.setItem("authToken", res.data.token);
      window.location.reload(false)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-md mt-4 shadow-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            className={`w-full px-4 py-2 mt-2 border-2 rounded focus:outline-none focus:border-blue-500  ${
              errors.email && "border-red-500"
            }`}
            {...register("email")}
          />
          <p className="absolute text-red-500 text-sm">
            {" "}
            {errors.email?.message}
          </p>
        </div>

        {/* Password Field */}
        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-gray-600">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className={`w-full px-4 py-2 mt-2 border-2 rounded focus:outline-none focus:border-blue-500 ${
              errors.password && "border-red-500"
            }`}
            {...register("password")}
          />
          <p className="absolute text-red-500  text-sm">
            {" "}
            {errors.password?.message}
          </p>

          <button
            className="absolute top-2 right-3 text-gray-500 cursor-pointer"
            onClick={handleShowPassword}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          Login
        </button>
        <button
          className="relative top-2  text-gray-500 cursor-pointer"
          onClick={()=>navigate('/register')}
        >
          Register?
        </button>
      </form>
    </div>
  );
};

export default Login;
