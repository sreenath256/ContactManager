const express = require("express");
const errorHandling = require("./middleware/error-handling");
const connectDb = require("./config/dbConnection");
require("dotenv").config();
const cors = require('cors');

const app = express();
connectDb();

const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use("/api/test",require("./routes/testRouter"))
app.use("/api/contacts", require("./routes/contactRouter"));
app.use("/api/user", require("./routes/userRouter"));



app.use(errorHandling);

app.listen(port, () => console.log(`Server is running on port : ${port}`));
