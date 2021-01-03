const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
    "sk_test_51I56kdFsRc63Nt1n2etfnrGvJcPNNFnsgaCy7FfypXuvTzFlVA2G2kl4EUuO7cwkka1dUMPdRe0yFevkEAL3MuC3005Khyp8ht"
);

// API

// -App config
const app = express();

// -Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// -API route
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("payment request recives for this amount >>>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of currency
        currency: "usd",
    });

    // ok create
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// test end-point api
// app.get("/sikandar", (request, response) => response.status(200).send("hello Sikandar Ali Basharat"));

// -Listen commend
exports.api = functions.https.onRequest(app);

// example end-point
// http://localhost:5001/challenge-2349d/us-central1/api
