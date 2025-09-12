import express from 'express';
//import cors from 'cors';
const app = express();

app.get("/", (req, res) => {
    res.send("testing phase");
});
app.listen(5000, () => {
    console.log("Server started at http://localhost:5000");
});