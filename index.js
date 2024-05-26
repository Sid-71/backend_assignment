const express = require("express");
const mongoose = require("mongoose");
const app = express();
// const campaignRoute = require("./routes/campaign");
// const productRoute = require("./routes/product");
const userRoute = require("./routes/user");
const tipRouter = require("./routes/tip");
// const taskRoute = require("./routes/task");
require("dotenv").config()
app.use(express.json());
const User = require("./models/User");


app.use("/user",userRoute);
app.use("/tip",tipRouter);
// app.post("/user/signup",async (req,res)=>{
//     try {
//         console.log("12323");
//         const payload = req.body;
//         const data = await User.create(payload);
//         res.status(201).send({
//             message : "your task is created",
//             data : data
//         })
//     } catch (error) {
//         res.status(400).send({
//             error : error.message,
//             stack : error.stack
//         })
//     }
// })


app.listen(4000, () => {
    console.log("server is running 4000");
})




const url = "mongodb+srv://root:root@node.z4hwsxc.mongodb.net/";
console.log("url",url);
mongoose.connect(url)
  .then(() => {
    console.log('db is connected');
  })
  .catch((err) => {
    console.log(err);
  });

