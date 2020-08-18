const express=require('express');
const ejs=require("ejs");
const bodyParser=require("body-parser");
const Nexmo=require("nexmo");
const socketio=require("socket.io")
//init nexmo
const nexmo = new Nexmo({
    apiKey: 'f318e208',
    apiSecret: 'dtrihEYTjLzKxUu9',
  });
//init express
const app=express();
app.set("view engine",'html');
app.engine("html",ejs.renderFile)
//public folder
app.use(express.static(__dirname + '/public'));
//body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
//define routes 
app.get("/",(req,res)=>{
    res.render("index")
})
//catch form submit
app.post("/",(req,res)=>{
   //res.send(req.body);
   //console.log(req.body)
    const number=req.body.number;
    const text=req.body.text;
    const from = 'Vonage APIs';
    const to = '213656632054';
    //const text = 'Hello from Vonage SMS API';
    nexmo.message.sendSms(from,to,text,{type:'unicode'},(err,responseData)=>{
        if(err) console.log(err);
        else console.dir(responseData)
    })
})
//define port
app.listen(8080)