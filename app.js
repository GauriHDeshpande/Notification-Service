require("./cron/cron");
const dbConfig = require("./config/db.config");
const mongoose = require("mongoose");
const express = require("express");


const app = express();
app.use(express.json());


mongoose.connect(dbConfig.DB_URL,
    () => {
        console.log("connected to mongodb");
    },
    err => {
        console.log("Error: ", err.message);
    }    
);

require("./routes/ticketNotification.route")(app);

app.listen(3030, () => {
    console.log("Application started on port number 3030");
});