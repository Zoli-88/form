// Endpoints
const BASE_API = "https://jsonplaceholder.typicode.com";
const POSTS_API = "posts";
const USERS_API = "users";

// The core function fetches the "posts" resources from the API
// The logic is based on using query parameters (ex: posts?title="qui est esse")
// The queryTitle parameter is passed to the function to dynamically change the endpoint URL based on the value of the user input,
// for example if the user enters "qui est esse" we get the value from the input using the formData constructor and pass it to this function
// The endpointUrl will result in `${BASE_API}/${POSTS_API}?title=${queryTitle}` which is "https://jsonplaceholder.typicode.com/posts?title=qui est esse"
// in this example
// The same logic is used for listUsers function below
async function listPosts(queryTitle) {
  let endpointUrl = `${BASE_API}/${POSTS_API}`;

  if (queryTitle) {
    endpointUrl += `?title=${queryTitle}`
  }

  const response = await fetch(endpointUrl);
  const posts = await response.json();
  return posts
}

// This function is basically identical to the one above with a different URL and parameter which 
async function listUsers(queryUser) {
  let endpointUrl = `${BASE_API}/${USERS_API}`;

  if (queryUser) {
    endpointUrl += `?username=${queryUser}`;
  }

  const response = await fetch(endpointUrl);
  const users = await response.json();
  return users
}

// This function is used to edit an existing post from the list of posts, it receives two parameters, the postTitle is for the actual
// value that we get from the user input (using the formData constructor) and postTitleId which is unique to each post; the id for every
// entity is automatically provided by the API
// Basically we want to send our input value to the "back end" to patch the resource we want to edit
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