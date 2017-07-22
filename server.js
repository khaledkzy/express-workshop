const express = require('express');
const app = express();

app.listen(3000, function () {
  console.log('Server is listening on port 3000. Ready to accept requests!');
});

app.use(express.static("public"));


app.get("/student",  (req, res) => {
    res.send("Hello To the Student World!");
});

app.get("/khaled",(req, res)=> {
    res.send("<h2>Hello Khaled</h2>");
});
app.get("/node",(req, res)=> {
    res.send("<h2>NODE</h2>");
});
app.get("/girls",(req, res)=> {
    res.send("<h2>Girls</h2>");
});


