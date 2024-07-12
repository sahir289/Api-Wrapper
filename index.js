import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import router from "./app/router/index.js";

// import cookieParser from "cookie-parser"


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use routes
app.use("/groovy-pay", router);
app.use(express.static('public'))


const PORT = process.env.PORT || 8000; 

// Server configuration
app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
});