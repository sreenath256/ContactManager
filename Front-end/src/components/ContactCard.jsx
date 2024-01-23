import React, { useDebugValue, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import EditForm from "./EditForm";
import { useState } from "react";
import ConfirmDelete from "./ConfirmDelete";

export const ContactCard = ({ name, phone, email, id, refresh }) => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleCopyClick = (value) => {
    navigator.clipboard.writeText(value);
  };

  return (
    <>
      <div class="flex flex-wrap m-3">
        <div
          class="border bg-card text-card-foreground shadow-lg rounded-lg overflow-hidden"
          data-v0-t="card"
        >
          <div class="p-4 space-y-4">
            <span class="relative flex shrink-0 overflow-hidden bg-gray-100 rounded-full h-16 w-16 mx-auto">
              <span class="flex h-full w-full items-center justify-center rounded-full bg-muted text-xl">
                {name[0]}
              </span>
            </span>
            <div class="text-center">
              <h2 class="text-xl font-bold">{name} </h2>
              <div class="flex justify-center items-center gap-2 mt-2">
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
                  class="w-4 h-4"
                  
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span class="text-gray-600"  onClick={() => {
              window.location.href = `tel:${phone}`;
            }}>{phone} </span>
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
                  class="w-4 h-4 ml-2 hover:cursor-pointer"
                  onClick={() => {
                    handleCopyClick(phone);
                  }}
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                </svg>
              </div>
              <div class="flex justify-center items-center gap-2 mt-2">
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
                  class="w-4 h-4"
                >
                  <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"></path>
                  <polyline points="15,9 18,9 18,11"></polyline>
                  <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0"></path>
                  <line x1="6" x2="7" y1="10" y2="10"></line>
                </svg>
                <span class="text-gray-600" onClick={() => {
              window.location.href = `mailto:${email}`;
            }}>{email}</span>
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
                  class="w-4 h-4 ml-2 hover:cursor-pointer"
                  onClick={() => {
                    handleCopyClick(email);
                  }}
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                </svg>
              </div>
            </div>
            <div class="flex justify-center items-center gap-4 mt-4">
              <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"             onClick={() => setShowModal(true)}
>
                Edit
              </button>
              <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10  hover:bg-red-500 text-red-500 hover:text-white px-4 py-2 rounded border border-red-500 hover:border-transparent"             onClick={() => setShowDeleteModal(true)}
>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <EditForm
        showModal={showModal}
        setShowModal={setShowModal}
        id={id}
        name={name}
        phone={phone}
        email={email}
        refresh={refresh}
      />
      <ConfirmDelete
        showDeleteModal={showDeleteModal}
        setShowDeleteModal={setShowDeleteModal}
        id={id}
        refresh={refresh}
        name={name}
      /> 

      {/* <div className="bg-blue-200 text-black p-6 m-6 rounded-md shadow-lg w-72">
        <h2 className="text-2xl font-semibold mb-4 ">{name}</h2>
        <div className="w-full flex  justify-between">
          <p
            className="text-lg mb-2 "
            onClick={() => {
              window.location.href = `tel:${phone}`;
            }}
          >
            📞 <span className="hover:cursor-text">{phone}</span>
          </p>
          <FontAwesomeIcon
            className="hover:cursor-pointer"
            icon={faCopy}
            onClick={() => {
              handleCopyClick(phone);
            }}
          />
        </div>
        <div className="w-full flex  justify-between">
          <p
            className="text-lg"
            onClick={() => {
              window.location.href = `mailto:${email}`;
            }}
          >
            ✉️ <span className="hover:cursor-text"> {email}</span>
          </p>
          <FontAwesomeIcon
            className="hover:cursor-pointer"
            icon={faCopy}
            onClick={() => {
              handleCopyClick(email);
            }}
          />
        </div>
        <div className="flex justify-between">
          <button
            className="bg-blue-400 text-black  px-4 py-2 mt-4 rounded-md"
            onClick={() => setShowModal(true)}
          >
            Edit
          </button>
          <button
            className="bg-red-500 text-black  px-4 py-2 mt-4 rounded-md"
            onClick={() => setShowDeleteModal(true)}
          >
            Delete
          </button>
        </div>
      </div>

      */}
    </>
  );
};
