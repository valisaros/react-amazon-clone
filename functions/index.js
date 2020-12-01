const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const { response } = require('express');
const stripe = require("stripe")('sk_test_51HtSOFGGqyoNXvHo5WNj7CfbdbYER9yhBLeiI5JbeFFgwXjqilTc6wL2Me71fbkGPPGs4BrW2wMV0N8EXrpByQqp00GcsDsbuJ');

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency (we are using USD)
        currency: "usd",
    });

    // OK - Created (201)
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen command
exports.api = functions.https.onRequest(app)


// Example endpoint
// http://localhost:5001/clone-amaz-valisaros/us-central1/api