const express = require('express');
const app = express();
const fs = require('fs')
app.use(express.static("public"));
const formidable = require('express-formidable')
app.use(formidable());



app.post('/create-post', function (req, res) {
  //res.json(req.fields)
  const filePath = __dirname + '/data/posts.json';
  //console.log(req.fields.blogpost);
  const postsContent = fs.readFileSync(filePath);
  const posts = JSON.parse(postsContent);
  const timeStamp = Date.now()
  posts[timeStamp] = req.fields.blogpost;
  //console.log(posts);
  fs.writeFileSync(filePath, JSON.stringify(posts))
  res.send(200, posts)
 
             




  //    fs.readFile(__dirname + '/data/posts.json', function (error, file) {
  //     console.log(file);
  // });

  //   fs.writeFile(filePath, JSON.stringify(req.fields), function () {
  //     res.send(200)
  // });

  //console.log('the post')
  //console.log(req.fields);

});

app.listen(3000, function () {
  console.log('Server is listening on port 3000. Ready to accept requests!');
});