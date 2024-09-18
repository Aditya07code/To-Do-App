const express = require('express');
const routes = require("./routes/ToDoRoutes");
require("dotenv").config();
const cors = require('cors');
const mongoose = require('mongoose')
// const path = require('path')
// const cookieParser = require('cookie-parser');
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
// const upload = require('./config/multerconfig');


const app = express();
const PORT = process.env.PORT || 5000
app.use(cors());
const allowedOrigins = [process.env.FRONTEND_URL];  

app.use(cors({
  origin: allowedOrigins,
}));
app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.use(express.static(path.join(__dirname,"public")));
// app.use(cookieParser());


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.use("/api", routes);






app.listen(PORT,()=> console.log(`listening at ${PORT}`));
