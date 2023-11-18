const express = require("express");
const app = express();
const { ethers } = require("ethers");
const nodemailer = require("nodemailer");
const getEmailTemplate = require("./emailTemplate");
const {
    CONTRACT_ABI,
} = require("./Consttant");


require("dotenv").config();

const provider = new ethers.WebSocketProvider(
  `wss://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
);
const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, CONTRACT_ABI, provider);

function sendEmail(ownerName, functionName, userAddress, amount) {
  let transporter = nodemailer.createTransport({
    host: process.env.HOST, // e.g., 'smtp.gmail.com'
    port: 465, // or the appropriate port for your SMTP server
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SENDER_EMAIL_ID,
      pass: process.env.SENDER_EMAIL_AUTH,
    },
  });

  // Define the email details
  let mailOptions = {
    from: process.env.SENDER_EMAIL_ID,
    to: process.env.OWNER_EMAIL,
    subject: "Smart Contract Notification",
    html: getEmailTemplate(ownerName, functionName, userAddress, amount),
    text: getEmailTemplate(ownerName, functionName, userAddress, amount),
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}

async function main() {
  contract.on("NotifyOwner", (sender, amount, event) => {
    let info = {
      sender: sender,
      amount: amount,
    };
    console.log("Event --------------===", event);
    sendEmail(
      process.env.OWNER_NAME,
      "vulnerableFunction",
      info.sender,
      info.amount
    );
  });
}

main();

app.get("/", (req, res) => {
  res.send("Server is Running!");
});

app.listen(8000, "0.0.0.0", () => {
  console.log("Server is running.", 8000);
});
