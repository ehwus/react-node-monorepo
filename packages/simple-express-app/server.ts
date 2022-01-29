import express from "express";

const port = 3001;
const app = express();

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', "true");
  next();
});

app.get("/data", (req, res) => {
  res.json({foo: "bar"})
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})