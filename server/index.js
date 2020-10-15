
const path = require('path');
const express = require('express');
const app = express();
const { getValue, setValue} =require('./db.js')
app.get('/api/getValue', (req, res, next) => {
    var data =  getValue();
    console.log("data",data)
    data.then((value) => {
        res.json({
            data: value
        })
    })
})
app.get('/api/setValue', (req, res, next) => {
   // console.log(req);
    var value="ccc";
    setValue(value);
})
// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');