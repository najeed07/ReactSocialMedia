import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../data";
import { useState } from "react";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isliked, setisliked] = useState(false);

  const likeHandler = () => {
    setLike(isliked ? like - 1 : like + 1);
    setisliked(!isliked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
              className="postUserImg"
            />
            <span className="postUserName">
              {Users.filter((u) => u.id === post.userId)[0].username}{" "}
            </span>
            <span className="postTime">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postLeftButtom">
            <img
              src="/assets/like.png"
              alt=""
              onClick={likeHandler}
              className="buttomPostIcon"
            />
            <img
              src="/assets/heart.png"
              alt=""
              onClick={likeHandler}
              className="buttomPostIcon"
            />
            <div className="postLikeCount">{like} people liked the post</div>
          </div>
          <div className="postRightButtom">
            <span className="postComment">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
