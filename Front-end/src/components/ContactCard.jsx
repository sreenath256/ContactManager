import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import EditForm from "./EditForm";
import { useState } from "react";
import ConfirmDelete from "./ConfirmDelete";

export const ContactCard = ({ name, phone, email, id ,refresh}) => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleCopyClick = (value) => {
    navigator.clipboard.writeText(value);
  };
  return (
    <>
      <div className="bg-blue-200 text-black p-6 m-6 rounded-md shadow-lg w-72">
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
          <Button
            content="Edit"
            bgColor="blue-400"
            textColor="black"
            fun={() => {
              setShowModal(true);
            }}
          />
          <Button
            content="Delete"
            bgColor="red-500"
            textColor="black"
            fun={() => setShowDeleteModal(true)}
          />
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
    </>
  );
};
