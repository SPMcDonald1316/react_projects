import { Stack, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function Post({ post }) {
  return (
    <Stack direction="horizontal" gap={3} className="Post">
      <Image src={post.author.avatar_url + '&s=48'}
             alt={post.author.username} roundedCircle />
      <div>
        <p>
          <Link to={'/user/' + post.author.username}>
            { post.author.username }
          </Link>
          &nbsp;&mdash;&nbsp;
          { post.timestamp }:
        </p>
        <p>{ post.text }</p>
      </div>
    </Stack>
  );
}

export default Post;