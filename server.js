import express from "express";

const app = express()


const PORT= 8000;

//middleaware
app.use(express.json());


// api endpoints
import taskRouter from "./src/taskRouter.js";
app.use("/api/v1/task", taskRouter);

app.get("/", (req, res)=>{
    res.json({
        status: "success",
        message: "server runninng as normal",
    });
});

// server listiening the port
app.listen(PORT, error =>{
    error && console.log(error.message);

    console.log(`
    server running at http://localhost:${PORT}
    `);
});