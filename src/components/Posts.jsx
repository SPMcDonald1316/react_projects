import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Post from "./Post";

function Posts() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    (async () => {
      const repsonse = await fetch('http://localhost:4000/api/feed');
      if (repsonse.ok) {
        const results = await repsonse.json();
        setPosts(results.data);
      } else {
        setPosts(null);
      }
    })();
  }, []);

  return (
    <>
      {posts === undefined ? 
        <Spinner animation="border" />
      :
        <>
          {posts === null ?
            <p>Could not retrieve blog posts.</p>
          :
            <>
              {posts.length === 0 ?
                <p>There are no blog posts.</p>
              :
                posts.map(post => <Post key={post.id} post={post} />)
              }
            </>
          }
        </>
      }
    </>
  );
}

export default Posts;