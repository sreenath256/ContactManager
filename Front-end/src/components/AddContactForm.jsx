import React from "react";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "../../utils/axios";

const AddContactForm = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    phone: yup
      .string("Enter a valid number")
      .required("Mobile number is required")
      .min(10),
    email: yup
      .string()
      .email("Not a valid email adress")
      .required("Email is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async(formData) => {
    try{

      const res = await axios.post('contacts',formData)
    }catch(err){
      if(err.response.data.user===false){
        navigate('/login')
      }
    }
  };

  return (
    <form
      className="bg-white p-8 rounded shadow-md w-96 "
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Name Field */}
      <div className="mb-4">
        <label htmlFor="name" className={`text-sm text-gray-600 `}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={`w-full px-4 py-2 mt-2 border-2 focus:outline-none focus:border-blue-500 rounded ${
            errors.name && "border-red-500"
          }`}
          {...register("name")}
        />
        <p className="absolute text-red-500 text-sm"> {errors.name?.message}</p>
      </div>

      {/* Phone Field */}
      <div className="mb-4">
        <label htmlFor="phone" className={`text-sm text-gray-600 `}>
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className={`w-full px-4 py-2 mt-2 border-2 focus:outline-none focus:border-blue-500 rounded ${
            errors.phone && "border-red-500"
          } }`}
          {...register("phone")}
        />
        <p className="absolute text-red-500 text-sm">{errors.phone?.message}</p>
      </div>

      {/* Email Field */}
      <div className="mb-4">
        <label htmlFor="email" className={`text-sm text-gray-600 `}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={`w-full px-4 py-2 mt-2 border-2 focus:outline-none focus:border-blue-500 rounded ${
            errors.phone && "border-red-500"
          }`}
          {...register("email")}
        />
        <p className="absolute text-red-500 text-sm">{errors.email?.message}</p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
      >
        Add Contact
      </button>
    </form>
  );
};

export default AddContactForm;
