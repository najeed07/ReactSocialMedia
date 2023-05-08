import "./rightbar.css";
import { Users } from "../../data";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="bithdayImg" />
          <span className="bithdaytext">
            <b> Celebrating birthday</b> with <b>3 other friends</b>
          </span>
        </div>
        <h4 className="onlineFriend">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle"> User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Goa</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Bangalore</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="/assets/person/10.jpeg" alt="" className="followingImg" />
            <span className="followingName">Okarin</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/7.jpeg" alt="" className="followingImg" />
            <span className="followingName">Kyoko</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/2.jpeg" alt="" className="followingImg" />
            <span className="followingName">Nobita</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/3.jpeg" alt="" className="followingImg" />
            <span className="followingName">Payan</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/4.jpeg" alt="" className="followingImg" />
            <span className="followingName">Norje</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/6.jpeg" alt="" className="followingImg" />
            <span className="followingName">Polly</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/9.jpeg" alt="" className="followingImg" />
            <span className="followingName">Loma</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/5.jpeg" alt="" className="followingImg" />
            <span className="followingName">Saitama</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />};
      </div>
    </div>
  );
}
