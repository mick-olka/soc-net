import React from "react";
import ava from '../../../img/Avatar.png';
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

  return (
    <div className={s.content}>
      <div className={s.avatar}>
        <img alt='ava' src={props.profile.photos.large ? props.profile.photos.large : ava}/>
      </div>

      <div className={s.info}>
        <p className={s.profile_name}>
            {props.profile.fullName}
          </p>
          <ProfileStatus
              status={props.status}
              profileId={props.profile.userId}
              myId={props.myId}
              updateProfileStatus={props.updateProfileStatus}
          />
      </div>
        <p className={s.logOutBtn} onClick={()=>props.doLogOut()} >LogOut</p>
    </div>
  );
};

export default ProfileInfo;
