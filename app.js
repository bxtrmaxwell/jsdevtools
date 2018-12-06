const express = require('express');

const app = express();
const isEmpty = require('is-empty');
const stringlib = require('./lib/stringlib');

app.use((req, res, next) => {
  const str = req.query.str;
  if (!haveStrParam(str)) return res.status(500).send({ msg: 'str is a required parameter' });

  req.strParam = str;
  next();
});

// reverse the string
app.get('/reverse', (req, res) => {
  res.send(stringlib.reverse(req.strParam));
});

// uppercase the string
app.get('/upper', (req, res) => {
  res.send(stringlib.uppercase(req.strParam));
});

// lowercase the string
app.get('/lower', (req, res) => {
  res.send(stringlib.lowercase(req.strParam));
});

function haveStrParam(str){
  return !isEmpty(str);
}


app.listen(3000, () => {console.log('Example app listening on port 3000!');});
