const express = require("express");
const {
  getContacts,
  getContact,
  putContact,
  deleteContact,
  postContact,
} = require("../controllers/contact-controller");
const validateToken = require("../middleware/validateToken");
const router = express.Router();

router.use(validateToken);
router.route("/").get(getContacts).post(postContact);
router.route("/:id").get(getContact).put(putContact).delete(deleteContact);

module.exports = router;
