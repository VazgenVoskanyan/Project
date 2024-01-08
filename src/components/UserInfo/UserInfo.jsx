import { CiStar } from "react-icons/ci";

import UserInfoStyle from "./UserInfo.module.css";

export const UserInfo = () => {
  return (
    <div className={UserInfoStyle.uinfo}>
      <div className={UserInfoStyle.uinfo_user}>
        <div className={UserInfoStyle.uinfo_user_img}>
          <img src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" alt="" />
        </div>
        <p className={UserInfoStyle.uinfo_user_name}> John Smith</p>
      </div>
      <div className={UserInfoStyle.uinfoSince}>
        <p>On List.am since 13.03.2022</p>
      </div>
      <div className={UserInfoStyle.uinfo_rating}>
        <div>
          <CiStar />
        </div>
        <div>
          <CiStar />
        </div>
        <div>
          <CiStar />
        </div>
        <div>
          <CiStar />
        </div>
        <div>
          <CiStar />
        </div>
      </div>
      <div className={UserInfoStyle.uinfo_btns}>
        <button className={UserInfoStyle.btnWrite}>Write</button>
        <button className={UserInfoStyle.btnCall}>Call</button>
      </div>
    </div>
  );
};
