const { POINT_CONVERSION_COMPRESSED } = require('constants');
const express = require('express');
const app = express();

const logger = (req, res, next) => {
    // console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}}`);
    next();
};

app.use(logger);

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get('/',async (req,res)=>{

    res.send('Welcome to String world. Created by Jahid');
})

app.get('/string/size/:str',async (req,res)=>{
    var a = req.params.str;

    res.send(`The size of string '${a}' is ${a.length}.`);
})

app.get('/string/concat/:str1/:str2',async (req,res)=>{
    var output = req.params.str1.concat(req.params.str2);
    res.send(`String 1 = ${req.params.str1}, String 2 = ${req.params.str2} | Output: ${output}`);   
})


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on port: ${PORT}`);
});

module.exports = app;