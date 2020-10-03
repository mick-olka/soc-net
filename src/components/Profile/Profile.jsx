import React from "react";

import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div>
      <div className={s.bg}>
        <img alt='bg' src="https://image.shutterstock.com/image-photo/very-wide-panoramic-photo-forest-260nw-1202179588.jpg" />
      </div>
      <div className="content">
        <ProfileInfo
          // avatar="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"
          // profile_name={props.profilePage.profileInfo.name}
          // info={props.profilePage.profileInfo.info}
        />
        <MyPostsContainer/>
      </div>
    </div>
  );
};

export default Profile;
