import express from "express";
import mongooes from "mongoose";
import { PORT } from "./config.js";
import { mongoURI } from "./config.js";
import router from "./routes/bookRoutes.js";
import cors from "cors";

const app = express();

// * middleware cors
app.use(cors());
// app.use(cors({
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//     credentials: true
// }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);


// * connect to db
const connectDB = async () => {
    try {
        await mongooes.connect(mongoURI);
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
connectDB();



app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})