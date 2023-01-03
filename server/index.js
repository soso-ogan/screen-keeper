const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

//register and log in routes
app.use("/auth", require("./routes/jwtAuth"));


//dashboard routte
app.use("/dashboard", require("./routes/dashboard"))


app.listen(5000, () => {
  console.log("server is running on port 5000");
});
