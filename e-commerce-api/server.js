const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const swaggerDocs = require('./swagger.js')

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use("/users", require("./routes/userRoutes"));

// Swagger docs
swaggerDocs(app, 3000);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
