var express = require('express')
var app = express()
var stringlib = require('./lib/stringlib')
var isEmpty = require('is-empty')

app.use(function(req, res, next){
    var str = req.query.str;
    if(!haveStrParam(str))
        return res.status(500).send({msg: "str is a required parameter"});
    else{
        req.strParam = str;
        next();
    }
})

//reverse the string
app.get('/reverse', function (req, res){
    res.send(stringlib.reverse(req.strParam))
});

//uppercase the string
app.get('/upper', function(req, res){
    res.send(stringlib.uppercase(req.strParam))
});

//lowercase the string
app.get('/lower', function(req, res){
    res.send(stringlib.lowercase(req.strParam))
});

function haveStrParam(str){
    return !isEmpty(str);
}


app.listen(3000, function(){console.log('Example app listening on port 3000!')})