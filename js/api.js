// Endpoints
const BASE_API = "https://jsonplaceholder.typicode.com";
const POSTS_API = "posts";
const USERS_API = "users";

async function listPosts(queryTitle) {
  let endpointUrl = `${BASE_API}/${POSTS_API}`;

  if (queryTitle) {
    endpointUrl += `?title=${queryTitle}`
  }

  const response = await fetch(endpointUrl);
  const posts = await response.json();
  return posts
}

async function listUsers(queryUser) {
  let endpointUrl = `${BASE_API}/${USERS_API}`;

  if (queryUser) {
    endpointUrl += `?username=${queryUser}`;
  }

  const response = await fetch(endpointUrl);
  const users = await response.json();
  return users
}

 async function editPost(postTitle, postTitleId) {
  const response = await fetch(`${BASE_API}/${POSTS_API}/${postTitleId}`, {
    method: "PATCH",
    body: JSON.stringify({
      title: postTitle
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
}