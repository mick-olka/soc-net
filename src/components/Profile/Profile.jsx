import React from "react";

import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    // console.log('RENDER');

    return (
        <div>
            <div className={s.bg}>
                <img alt='bg'
                     src="https://image.shutterstock.com/image-photo/very-wide-panoramic-photo-forest-260nw-1202179588.jpg"/>
            </div>
            <div className="content">
                <ProfileInfo
                    isOwner={props.isOwner}
                    profile={props.profile}
                    status={props.status}
                    myId={props.myId}
                    updateProfileStatus={props.updateProfileStatus}
                    doLogOut={props.doLogOut}
                    savePhoto={props.savePhoto}
                    saveProfile={props.saveProfile}
                />
                <MyPostsContainer/>
            </div>
        </div>
    );
};

export default Profile;
