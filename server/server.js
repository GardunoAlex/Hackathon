const express = require("express");

const app = express();

const cors = require("cors");


const corsOptions = {
    origin: ["http://localhost:5173"]
}

app.use(cors(corsOptions));

// Sample API route
app.get("/api", (req, res) => {
  res.json({ fruits: ["apple", "banana"]});
});



// Start server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});