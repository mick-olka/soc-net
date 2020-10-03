import React from "react";

import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div className={s.content}>
      <div className={s.avatar}>
        <img alt='ava' src={null}
        // {props.avatar} 
        />
      </div>

      <div className={s.info}>
        <p className={s.profile_name}>
          {/* {props.profile_name} */}
          MYNAME
          </p>
        <span className={s.about}>
          {/* {props.info} */}
          INFO INFO INFP
          </span>
      </div>
    </div>
  );
};

export default ProfileInfo;
