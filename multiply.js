const express= require("express");
const app = express();

app.use(express.json());

function multiply(req, res){

    const a = req.body.a;
    const b = req.body.b;

    const ans = a*b;
    res.status(200).send({
        "ans" : ans
    });
}


app.get("/mul" , multiply);

app.listen(3002, "localhost");