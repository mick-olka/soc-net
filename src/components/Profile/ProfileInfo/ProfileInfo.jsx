import React, {useState} from "react";
import ava from '../../../img/Avatar.png';
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileInfoData from "./ProfileInfoData";
import ProfileInfoDataForm from "./ProfileInfoEditData";

const ProfileInfo = ({profile, savePhoto, saveProfile, doLogOut, isOwner, status, myId, updateProfileStatus}) => {

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    let [editMode, setEditMode] = useState(false)

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div className={s.content}>
            <div>
                <div className={s.avatar}>
                    <img alt='ava' src={profile.photos.large ? profile.photos.large : ava}/>
                </div>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <p className={s.logOutBtn} onClick={() => doLogOut()}>LogOut</p>
            </div>

            <div className={s.info}>
                <p className={s.profile_name}>{profile.fullName}</p>
                <ProfileStatusWithHooks
                    status={status}
                    profileId={profile.userId}
                    myId={myId}
                    updateProfileStatus={updateProfileStatus}
                />
                {editMode
                    ? <ProfileInfoDataForm onSubmit={onSubmit} profile={profile} initialValues={profile}/>
                    : <ProfileInfoData goEditMode={() => setEditMode(true)} isOwner={isOwner} profile={profile}/>}
            </div>
        </div>
    );
};

export default ProfileInfo;
