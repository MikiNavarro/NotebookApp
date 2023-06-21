const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://admin:admin@atlascluster.pug0fgz.mongodb.net/NotebookApp?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
