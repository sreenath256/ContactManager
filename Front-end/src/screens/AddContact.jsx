import React from "react";
import AddContactForm from "../components/AddContactForm";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-14 flex justify-center bg-neutral-400 ">
      <div
        className="fixed bg-blue-500 w-14 h-10 top-12 left-1 flex justify-center items-center rounded-tl-full rounded-bl-full text-white hover:cursor-pointer"
        onClick={() => navigate("/")}
      >
        <h1>Home</h1>
      </div>
      <AddContactForm />
    </div>
  );
};

export default AddContact;
