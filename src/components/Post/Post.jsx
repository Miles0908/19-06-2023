import { useState } from "react";
import "./index.css";

import { LikeIcon } from "../../components/icons";
import { CommentIcon } from "../../components/icons";
import { MessangerIcon } from "../../components/icons";
import { SaveIcon } from "../../components/icons";

const Post = ({ post }) => {
  const { isLike } = post;
  const [like, setLike] = useState(isLike);

  const toggleLike = () => {
    setLike(!like);
  };

  return (
    <article className="Post">
      <div className="PostTop">
        <div className="PostTop__User">
          <div className="User__Image">
            <img
              src={post?.userImage ? post?.userImage : ""}
              alt={post?.userName}
            />
          </div>
          <div className="User__Content">
            <p className="User__Username">{post?.userName}</p>
            <p className="User__Location">{post?.location}</p>
          </div>
        </div>
        <div className="PostTop__Actions"></div>
      </div>
      <div className="PostContent">
        {post?.media?.map((media) => (
          <img key={media?.id} src={media?.src} />
        ))}
      </div>

      <div className="PostActions">
        <div onClick={() => toggleLike()} className="PostActions__Like">
          <LikeIcon fill={like && like ? "#FD1D1D" : "#262626"} />
        </div>
        <p className="PostActions__Comment">
          <CommentIcon />
        </p>
        <MessangerIcon />
        <p className="Save">
          <SaveIcon />
        </p>
      </div>
      <div className="PostLikes">
        {post?.likes?.map((likes) => (
          <p key={likes?.userId}>
            <img
              src={post?.userImage ? post?.userImage : ""}
              alt={post?.userName}
            /> 
             Liked by <b>{likes?.userName}</b> and <b>{likes.numberOfLikes} others</b>
          </p>
        ))}
      </div>
      <div className="PostComment">
        {post?.comments?.map((comments) => (
          <p key={comments?.id}>
         <b>  {comments?.userName}</b> {comments?.content}
          </p>
        ))}
      </div>
    </article>
  );
};

export default Post;
