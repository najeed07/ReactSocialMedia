import "./online.css";

export default function Online({ user }) {
  return (
    <li className="rightbarFriend">
      <div className="imgContainer">
        <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
        <span className="online"></span>
      </div>
      <span className="rightbarUserName">{user.username}</span>
    </li>
  );
}
