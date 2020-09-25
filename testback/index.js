const express = require ('express');

const app = express();


const port = 8000;

app.get("/login", (req,res) =>{
    return res.send("You are visiting login route");

});


app.get("/signup", (req,res) =>{
    return res.send("You are visiting sign up route");

});

app.listen(port , () => {
    console.log("server is up and running...");
});

