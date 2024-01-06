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
      
      <button className="fixed right-4 bg-blue-500 text-white rounded-full w-20 h-20 bottom-28" onClick={()=>navigate('/add-contact')}>Add Contact</button>

    </div>
  );
};

export default HomeScreen;
