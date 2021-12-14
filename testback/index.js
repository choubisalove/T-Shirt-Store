const express = require("express");
const res = require("express/lib/response");

const app = express();

const port = 8000
app.get("/", (req,res) => {
    return res.send("Home Page");
});

app.get("/login", (req,res) => {
     return res.send("you are visiting login route");
});
app.get("/signup", (req,res) => {
    return res.send("you are visiting signup route");
});
app.get("/love", (req,res) => {
    return res.send("Love is using instagram");
});

app.get("/signout", (req,res) => {
    return res.send("you are signed out");
});
app.listen(port, () => {
    console.log("Server is signing up and running...");
});

// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })