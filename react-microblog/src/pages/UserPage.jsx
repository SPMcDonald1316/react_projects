import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useApi } from '../contexts/ApiProvider';
import { useUser } from "../contexts/UserProvider";
import { useFlash } from "../contexts/FlashProvider";
import { Stack, Image, Spinner, Button } from "react-bootstrap";
import Body from '../components/Body';
import TimeAgo from '../components/TimeAgo';
import Posts from '../components/Posts';

function UserPage() {
  const { username } = useParams();
  const [user, setUser] = useState();
  const api = useApi();
  const [isFollower, setIsFollower] = useState();
  const { user: loggedInUser } = useUser();
  const flash = useFlash();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await api.get(`/users/${username}`);
      if (response.ok) {
        setUser(response.body);
        if (response.body.username !== loggedInUser.username) {
          const follower = await api.get(`/me/following/${response.body.id}`);
          if (follower.status === 204) {
            setIsFollower(true);
          } else if (follower.status === 404) {
            setIsFollower(false);
          } else {
            setIsFollower(null);
          }
        }
      } else {
        setUser(null);
      }
    })();
  }, [username, api, loggedInUser]);

  const edit = () => {
    // TODO
  };

  const follow = async () => {
    // TODO
  };

  const unfollow = async () => {
    // TODO
  };

  return (
    <Body sidebar>
      {user === undefined ?
        <Spinner animation="border" />
      :
        <>
          {user === null ? 
            <p>User not found.</p>
          :
            <>
              <Stack direction="horizontal" gap={4}>
                <Image src={user.avatar_url + '&s=128'} roundedCircle />
                <div>
                  <h1>{user.username}</h1>
                  {user.about_me && <h5>{user.about_me}</h5>}
                  <p>
                    Member since: <TimeAgo isoDate={user.first_seen} />
                    <br />
                    Last seen: <TimeAgo isoDate={user.last_seen} />
                  </p>
                  {isFollower === null &&
                    <Button variant="primary" onClick={edit}>
                      Edit
                    </Button>
                  }
                  {isFollower === false &&
                    <Button variant="primary" onClick={follow}>
                      Follow
                    </Button>
                  }
                  {isFollower === true &&
                    <Button variant="primary" onClick={unfollow}>
                      Unfollow
                    </Button>
                  }
                </div>
              </Stack>
              <Posts content={user.id} />
            </>
          }
        </>
      }
    </Body>
  );
}

export default UserPage;