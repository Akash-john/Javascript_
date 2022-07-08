const mongoose = require("mongoose");

const dbConnection = () => {
  // const connectionParams = {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // };
  try {
    mongoose.connect(process.env.MONGODB);
    console.log("DB connection succesfull");
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnection;
