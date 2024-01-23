import React, { useEffect, useState } from "react";
import { ContactCard } from "../components/ContactCard";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const HomeScreen = () => {
  const [contacts, setContacts] = useState([]);
  const [render, setRender] = useState(false);
  const refresh = { render, setRender };

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/contacts")
      .then((res) => {
        setContacts(res.data.data);
      })
      .catch((err) => {
        if (err.response.data.user === false) {
          navigate("/login");
        }
      });
  }, [render]);

  return (
    <div className="mt-4 flex flex-col justify-center">
      <h1 className="text-xl font-semibold text-center"> All contacts</h1>
      <div className="flex flex-row justify-center flex-wrap ">
        {contacts.length === 0 ? (
          <div className="flex flex-col mt-10">
            <h1>No Contacts Found</h1>
            <Button
              content="Add Contact"
              bgColor="blue-500"
              textColor="white"
              fun={() => navigate("/add-contact")}
            />
          </div>
        ) : (
          contacts.map((contact, index) => {
            return (
              <ContactCard
                refresh={refresh}
                key={index}
                id={contact._id}
                name={contact.name}
                phone={contact.phone}
                email={contact.email}
              />
            );
          })
        )}
      </div>

      <div class="fixed bottom-28 right-4 bg-blue-500 hover:bg-blue-600 p-2 rounded-full flex items-center space-x-2 cursor-pointer" onClick={()=>navigate('/add-contact')}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
        <span class="text-white text-sm">Add Contact</span>
      </div>
      {/* <button className="fixed right-4 bg-blue-500 text-white rounded-full w-20 h-20 bottom-28" onClick={()=>navigate('/add-contact')}>Add Contact</button> */}
    </div>
  );
};

export default HomeScreen;
