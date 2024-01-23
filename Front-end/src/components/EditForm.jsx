import React from "react";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "../../utils/axios";

export default function EditForm({
  showModal,
  setShowModal,
  id,
  name,
  phone,
  email,
  refresh
}) {
    const {render,setRender}=refresh
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

  const onSubmit = async (formData) => {
    try {
      const res = await axios.put(`contacts/${id}`, formData);
      console.log(res);
      setRender(!render)
      
      setShowModal(false);
    } catch (err) {
      if (err.response.data.user === false) {
        navigate("/login");
      }
    }
  };
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <form
                  className="bg-white p-8 rounded shadow-md w-96 "
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Edit Contact</h3>
                  </div>
                  {/*body*/}
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
                      defaultValue={name}
                      {...register("name")}
                    />
                    <p className="absolute text-red-500 text-sm">
                      {" "}
                      {errors.name?.message}
                    </p>
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
                      defaultValue={phone}
                      {...register("phone")}
                    />
                    <p className="absolute text-red-500 text-sm">
                      {errors.phone?.message}
                    </p>
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
                      defaultValue={email}
                      {...register("email")}
                    />
                    <p className="absolute text-red-500 text-sm">
                      {errors.email?.message}
                    </p>
                  </div>

                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-green-500 text-white hover:bg-green-600  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
