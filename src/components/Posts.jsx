import { useState } from "react";
import { Spinner } from "react-bootstrap";

function Posts() {
  const [posts, setPosts] = useState();

  // TODO: add a side effect function to request posts

  return (
    <>
      {posts === undefined ?
        <Spinner animation='border' />
      :
        posts.map(post => {
          return (
            <p key={post.id}>
              <b>{post.author.username}</b> &mdash; {post.timestamp}
              <br />
              {post.text}
            </p>
          );
        })
      }
    </>
  );
}

export default Posts;