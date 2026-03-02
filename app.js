const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();

app.use(express.json());




app.post("/signup", async (req, res) => {

    console.log(req.body)
    // const user = new User({
    //     firstname: "virat",
    //     lastName: "kohli",
    //     emailId: "virat@gmail.com",
    //     password: "virat@123456"
    // })
    // try {
    //     await user.save();
    //     res.send("user created successfully...")

    // } catch (error) {
    //     res.status(500).send("error saving the user" + err.message)
    // }
})




connectDB().then(() => {
    console.log("DB connected successfully...")
    app.listen(8000, () => {
        console.log("server is listening on port number 8000...")
    })

}).catch((err) => {
    console.log(err)
})



