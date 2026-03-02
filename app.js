const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();

app.use(express.json());



app.get("/user", async (req, res) => {
    const userEmail = req.body.emailId;
    try {
        const user = await User.findOne({ emailId: userEmail });
        res.send(user);

    } catch (error) {
        res.status(400).send("error finding the user" + err.message)

    }
})


// feed API get the all users from the Database...
app.get("/feed", async (req, res) => {

    try {
        const users = await User.find({});
        if(!users){
            return res.status(404).send("user not found")
        }else{
            res.send(users);
        }
        

    } catch (error) {
        res.status(400).send("error finding the user" + err.message)
    }

})

app.get("/feeds", async (req, res) => {

    try {
        const users = await User.findOne({ emailId: userEmail })
        if(!users){
            return res.status(404).send("user not found")
        }else{
             res.send(users)
        }
       

    } catch (err) {
        res.status(400).send("error finding the user" + err.message)


    }

})

app.post("/signup", async (req, res) => {

    const user = new User(req.body);
    // const user = new User({
    //     firstname: "virat",
    //     lastName: "kohli",
    //     emailId: "virat@gmail.com",
    //     password: "virat@123456"
    // })
    try {
        await user.save();
        res.send("user created successfully...")

    } catch (error) {
        res.status(500).send("error saving the user" + err.message)
    }
})




connectDB().then(() => {
    console.log("DB connected successfully...")
    app.listen(8000, () => {
        console.log("server is listening on port number 8000...")
    })

}).catch((err) => {
    console.log(err)
})



