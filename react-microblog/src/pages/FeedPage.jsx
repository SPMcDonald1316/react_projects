import Body from "../components/Body";
import Posts from "../components/Posts";

function FeedPage() {
  return (
    <Body sidebar>
      <Posts write={true} />
    </Body>
  );
}

export default FeedPage;