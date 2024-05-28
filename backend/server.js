import express from 'express'
import dotenv from "dotenv";
import cors from 'cors'
import dataBaseConnection from './database/dbConnection.js'
import { errorMiddleware } from './middlewares/error.js';
import messageRouter from './router/messageRouter.js';
import userRouter from './router/userRouter.js';
import appointmentRouter from './router/appointmentRouter.js';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';


//Configuring the environmental variable
dotenv.config();


//Server Setup
const app = express();


app.use(
    cors({
        origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        credentials: true,
    })
);




//Middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: '/tmp/',
    })
);


//data base connection
dataBaseConnection();

app.use(errorMiddleware);


//Test Route
app.get("/", async (req, res) => {
    return res
        .status(200)
        .send("This is RR App Backend");
});

app.use('/api/v1/message', messageRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/appointment', appointmentRouter);


//Listening the Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server Started in localhost:${PORT}`);
});