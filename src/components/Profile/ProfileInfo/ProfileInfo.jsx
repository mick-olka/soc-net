import React from "react";
import ava from '../../../img/Avatar.png';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return (<Preloader/>);
    }
  return (
    <div className={s.content}>
      <div className={s.avatar}>
        <img alt='ava' src={props.profile.photos.large? props.profile.photos.large : ava}/>
      </div>

      <div className={s.info}>
        <p className={s.profile_name}>
            {props.profile.fullName}
          </p>
          <ProfileStatus status={props.profile.aboutMe} />
      </div>
    </div>
  );
};

export default ProfileInfo;
