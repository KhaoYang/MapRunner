import express from 'express';
import cors from 'cors';
const app = express();
app.listen(5000, () => {
    console.log("Server started on port 5000");
});