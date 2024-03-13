let express = require("express");
const multer = require("multer");
let router = express.Router();
let Controllers = require("../controllers"); 
const path = require('path');



const storage = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname + file.fieldname + path.extname(file.originalname))
  }
})

const upload = multer({storage: storage})

// http://localhost:8080/api/posts/   Adds a GET route to return all posts
router.get("/", (req, res) => {
  console.log("GET /api/posts/ - Fetching all posts");
  Controllers.postController.getPosts(res);
});

// http://localhost:8080/api/posts/create   Adds a POST route to create a new post
router.post("/create", upload.single('image'), (req, res) => {
  Controllers.postController.createPost(req, res);
});

// http://localhost:8080/api/posts/<id>/comments   Adds a POST route to comment on a post
router.post("/:id/comments", (req, res) => {
  Controllers.postController.addComment(req, res);
});

// http://localhost:8080/api/posts/<id>   Adds a PUT route to update a post
router.put("/:id", upload.single('image'), (req, res) => {
  console.log(
    `PUT /api/posts/${req.params.id} - Updating post with data:`,
    req.body
  );
  Controllers.postController.updatePost(req, res);
});

// http://localhost:8080/api/posts/<id>/like   Adds a PUT route to like a post
router.put("/:id/like", (req, res) => {
  Controllers.postController.likePost(req, res);
});


// http://localhost:8080/api/posts/<id>   Adds a DELETE route to delete a post
router.delete("/:id", (req, res) => {
  console.log(`DELETE /api/posts/${req.params.id} - Deleting post`);
  Controllers.postController.deletePost(req, res);
});

// http://localhost:8080/api/posts/byUser/<id>   Adds a GET route to get all posts by a user
router.get("/byUser/:id", (req, res) => {
  console.log(`Getting all posts by user`);
  Controllers.postController.getPostsByUser(req, res);
});

// http://localhost:8080/api/posts/:id  Adds a GET route to return a single post by ID
router.get("/:id", (req, res) => {
  console.log(`GET /api/posts/${req.params.id} - Fetching post by ID`);
  Controllers.postController.getPostById(req, res);
});

module.exports = router;

