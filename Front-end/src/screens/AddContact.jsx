import React from "react";
import AddContactForm from "../components/AddContactForm";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-14 flex justify-center bg-neutral-400 "  onClick={() => navigate("/")}>
      <header class="fixed top-2 left-0 px-4 py-2 bg-transparent dark:bg-gray-800">
        <a
          class="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400"
          href="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-5 w-5"
          >
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
          <span>Back</span>
        </a>
      </header>
    
      <AddContactForm />
    </div>
  );
};

export default AddContact;
