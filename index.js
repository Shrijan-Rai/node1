//console.log("hello")
const express = require ("express");
const app = express();

app.use(express.json());


function addNums(req, res){
    const a= req.body.a;
    const b= req.body.b;
    const sum = a+b;
    const name = req.body.name;
    console.log(name);
    res.send({
        "sum" : sum
    });
    
}

app.get('/add', addNums);




function subNums(req, res){
    const a= req.body.a;
    const b= req.body.b;
    const sub = a-b;
    const name = req.body.name;
    console.log(name);
    res.send({
        "sub" : sub
    });
    
}

app.get('/sub', subNums);

// const port= 3001;
// const ip = "localhost";

// app.listen(port, ip, function(){
//     console.log("hello world");
    
// });

const port= 3001;
const ip = "localhost";

app.listen(port, ip, function(){
    console.log("hello world");
    
});
