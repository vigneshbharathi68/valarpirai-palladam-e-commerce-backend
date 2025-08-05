const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const swaggerDocs = require('./swagger.js')
const morgan = require('morgan')

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
// Use morgan as middleware with a predefined format (e.g., 'tiny', 'combined', 'dev')
app.use(morgan('tiny')); 

// Routes
app.use("/users", require("./routes/userRoutes"))
app.use("/category", require("./routes/categoryRoutes.js"));

// Swagger docs
swaggerDocs(app, 3000);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
