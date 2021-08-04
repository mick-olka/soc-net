import React from "react";

const ProfileInfoData = ({profile, isOwner, goEditMode}) => {
    return <div>
        {isOwner && <button onClick={goEditMode} >edit</button>}
        <div>Looking For A Job: {profile.lookingForAJob.toString()}</div>
        <div>Bout Me: {profile.aboutMe}</div>
        <div>My skillz: {profile.lookingForAJobDescription}</div>
        <div><p>Contacts:</p>
            {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} title={key} value={profile.contacts[key]}/>
            })
            }
        </div>
    </div>;
};

function Contact({title, value}) {
    return (
        <div><b>{title}:</b>{value}</div>
    );
}

export default ProfileInfoData;
