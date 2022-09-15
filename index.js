const express = require("express");
const db = require("./config/database");
const User = require("./models/User");
const userRoutes = require('./routes/user.routes');
const gameRoutes = require("./routes/game.routes");
const messageRoutes = require("./routes/message.routes");
const authRoutes = require("./routes/auth.routes");
require("dotenv").config();

const app = express();
app.use(express.json());
const port = process.env.PORT || 4000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//routes
app.use("/api", userRoutes);
app.use("/api", gameRoutes);
app.use("/api", messageRoutes);
app.use("/api", authRoutes);

app.get("/", (req, res)=>{
    return res.send("Bienvenidos a Critical Hit")
});

app.get("*", (req, res)=>{
    return res.status(404).send("404 route not found")
});

db()
    .then (()=> {
        app.listen(port, ()=> {
            console.log("server is running: " + port)
        });

    })
    .catch((error) => {
        console.log("Error conecting mongoDB " + error)
    });
    