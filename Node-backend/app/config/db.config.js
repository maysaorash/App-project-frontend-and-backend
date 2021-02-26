const mongoose = require("mongoose");
const dbURL =
  "mongodb+srv://maysaorash:nHrAg2sVrtv69AT@cluster0.nmkzg.mongodb.net/users?retryWrites=true&w=majority";

mongoose.Promise = global.Promise;

mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })

  .then(() => {
    console.log("Connected to the database!");
  })

  .catch((err) => {
    console.log("Cannot connect to the database!", err);

    process.exit();
  });

module.exports = mongoose;
