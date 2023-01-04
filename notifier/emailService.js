require('dotenv').config();
const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
    service: "gmail",
    debug: true,
    auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MP
    }
});