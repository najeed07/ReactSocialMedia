import Post from "../posts/Post";
import Share from "../share/Share";
import "./feeds.css";
import { Posts } from "../../data";

export default function Feeds() {
  return (
    <div className="feeds">
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
