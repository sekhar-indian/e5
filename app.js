const express=require('express');
const app=express();
const bodyparser=require('body-parser');
const router=require('./router/shop');
app.use(router);
app.use(bodyparser.urlencoded({extended:false}));

app.listen(3000);