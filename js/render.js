// DOM elements
const $postList = document.querySelector("#posts");
const $userList = document.querySelector("#users");
const $message = document.querySelector("#message");

// Functions
async function renderPosts(queryTitle) {
  try {
    const posts = await listPosts(queryTitle);
    renderEmptyContent();
    posts.forEach((post) => {
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
  await editPost(postTitle, postTitleId);
  renderPosts();
}

function renderEmptyContent() {
  $postList.innerHTML = '';
  $userList.innerHTML = '';
  $message.innerHTML = '';
}