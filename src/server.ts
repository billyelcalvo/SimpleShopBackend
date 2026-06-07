import "dotenv/config";
import express from 'express';

import userRouter from '../iam/interfaces/controller/userController'

const app = express();
const port = 3000;

app.use(express.json());
app.use("/user",userRouter);



app.listen(port, () => {
    console.log(`Server running on ${port}`);
});