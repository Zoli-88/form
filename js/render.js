// DOM elements
const $postList = document.querySelector("#posts");
const $userList = document.querySelector("#users");
const $message = document.querySelector("#message");

// States
let _posts = [];
_posts = JSON.parse(localStorage.getItem("posts")) || [];

// Functions
async function renderPosts(queryTitle) {
  try {
    const posts = await listPosts(queryTitle);
    
    if (_posts.length === 0 || queryTitle) {
      _posts = posts
    }

    renderEmptyContent();
    _posts.forEach((post) => {
      $postList.innerHTML += postCardComponent(post)
    })
  } catch (error) {
    console.log(error);
  }
}

async function renderUsers(queryUser) {
  try {
    const users = await listUsers(queryUser);
    renderEmptyContent();
    users.forEach((user) => {
      $userList.innerHTML += userCardComponent(user)
    })
  } catch (error) {
    console.log(error);
  }
}

function renderPostsByTtile(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const queryTitle = formData.get("searchTitle");
  renderPosts(queryTitle);
}

function renderUsersByName(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const queryUser = formData.get("searchUser");
  renderUsers(queryUser);
}

async function renderNewPosts(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const postTitle = formData.get("postTitle");
  const postTitleId = formData.get("postId");
  const updatedPost = await editPost(postTitle, postTitleId);
  const postToReplaceIndex = _posts.findIndex((post => post.id === updatedPost.id));
  _posts[postToReplaceIndex] = updatedPost;
  localStorage.setItem("posts", JSON.stringify(_posts));
  renderPosts();
}

function renderEmptyContent() {
  $postList.innerHTML = '';
  $userList.innerHTML = '';
  $message.innerHTML = '';
}