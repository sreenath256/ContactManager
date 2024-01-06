const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const con = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
      "Database connected -",
      con.connection.host,
      con.connection.name
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDb;

