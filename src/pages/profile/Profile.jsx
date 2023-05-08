import Feeds from "../../components/feeds/Feeds";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profiles">
        <Sidebar />
        <div className="rightContainer">
          <div className="rightTop">
            <div className="profileRightTop">
              <div className="profileCover">
                <img src="/assets/post/3.jpeg" alt="" className="coverImg" />
                <img
                  src="/assets/person/1.jpeg"
                  alt=""
                  className="profileImg"
                />
              </div>
              <div className="profileInfo">
                <h4 className="profilrInfoName">Pako</h4>
                <span className="profileInfoDesc">Hi there</span>
              </div>
            </div>
          </div>
          <div className="rightBottom">
            <Feeds />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
