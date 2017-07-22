const express = require('express');
const app = express();
const fs = require('fs')
app.use(express.static("public"));
const formidable = require('express-formidable')
app.use(formidable());
app.get('/get-posts', function (req, res) {
  res.sendFile(__dirname + '/data/posts.json')
})
app.post('/create-post', function (req, res) {
  //res.json(req.fields)
  /* Using Synchronus Method
  const filePath = __dirname + '/data/posts.json';
  //console.log(req.fields.blogpost);
  const postsContent = fs.readFileSync(filePath);
  const posts = JSON.parse(postsContent);
  const timeStamp = Date.now()
  posts[timeStamp] = req.fields.blogpost;
  //console.log(posts);
  fs.writeFileSync(filePath, JSON.stringify(posts))
  res.send(200, posts)
*/
// Using Synchronus Method
  const filepath = __dirname + '/data/posts.json';
  fs.readFile(filepath, function (err, data) {
    const postsContent = JSON.parse(data);
    const timeStamp = Date.now();
    postsContent[timeStamp] = req.fields.blogpost;
    fs.writeFile(filepath, JSON.stringify(postsContent, null, 2), function () {
      res.send(JSON.stringify(postsContent, null, 2))
    });
  });
});

app.listen(3000, function () {
  console.log('Server is listening on port 3000. Ready to accept requests!');
});

app.get("/", function (req, res) {
res.send('this is my fucntion')
});