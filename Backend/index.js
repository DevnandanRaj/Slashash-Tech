const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const favoritesRoutes = require("./route/favoritesRoutes");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(cors()); 

app.use("/favorites", favoritesRoutes);
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
