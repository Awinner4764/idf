const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.post("/register", (req, res) => {
  const { name, email, message } = req.body;
  console.log("New registration:", { name, email, message });

  // Here you could: Save to DB, send an email, etc.
  res.status(200).json({ message: "Form received" });
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
