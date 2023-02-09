function postCardComponent(post) {
  return `
    <a 
      class="article-link" 
      href="#!"
    >
      <article>
        <div class="content">
          <h2>${post.title}</h2>
          </br>
          <p>${post.body}</p>
          </br>
          <small>Click to edit</small>
        </div>            
        <form onsubmit="renderNewPosts(event)">              
          <label>                
            <span>
              Edit Post
            </span>
            <input 
              type="text" 
              name="postTitle" 
              id="postTitle"
              placeholder="Edit post title"
            >              
          </label>              
            <input 
              type="hidden" 
              name="postId" 
              value=${post.id}
            >
            <button type="submit">              
            <span>
              Edit
            </span>
            </button>
        </form>
      </article>
    </a>      
  `
}

function userCardComponent(user) {
  return `
    <article>
      <h2>${user.username}</h2>
      <br>
      <p>${user.name}</p>
      <p>${user.email}</p>
      <p>${user.phone}</p>
    </article>
  `
}