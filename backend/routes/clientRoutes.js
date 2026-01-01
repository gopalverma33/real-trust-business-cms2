const express = require("express");
const Client = require("../models/Client");
const router = express.Router();

router.post("/", async (req, res) => {
  const client = await Client.create(req.body);
  res.json(client);
});

router.get("/", async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
});

module.exports = router;
