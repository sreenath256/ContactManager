const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

const getContacts = asyncHandler(async (req, res) => {
  const contact = await Contact.find({user_id:req.user.id});
  res.status(200).json({ data: contact, message: "Getting all contacts" });
});

const getContact = asyncHandler(async (req, res) => {

  const contact = await Contact.findById(req.params.id)
  if(!contact){
    throw new Error('Contact not found')
  }
  res
    .status(200)
    .json({data:contact, message: `Getting indivitual contact of ${req.params.id}` });
});

const postContact = asyncHandler(async (req, res) => {
  console.log("This is body recived from the Post request", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fileds are mantatory");
  }
  console.log("Hello world");
  const contact = await Contact.create({
    user_id:req.user.id,
    name,
    email,
    phone
  })
  res.status(200).json({data:contact, message: `Creating  contact ` });
});

const putContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id)
  if(!contact){
    throw new Error('Contact not found')
  }
  const updatedContact = await Contact.findByIdAndUpdate(
   { _id: req.params.id,
    user_id:req.user.id},
    {$set: req.body},
    {new:true}
  )
  console.log("Contact updated");
  res.status(200).json({ data:updatedContact,message: `Updating contact of ${contact.name}` });
});

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id)
  if(!contact){
    throw new Error('Contact not found')
  }
  const deleteContact = await Contact.findByIdAndDelete(req.params.id)
  res
    .status(200)
    .json({data:deleteContact, message: `Deleting indivitual contact of ${deleteContact.name}` });
});

module.exports = {
  getContact,
  getContacts,
  putContact,
  deleteContact,
  postContact,
};
