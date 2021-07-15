import React from 'react';
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";
import ava from "../../img/Avatar.png";

function User({user, isFollowFetching, toggleFollow}) {
    const u=user;
    return (
        <div key={u.id} className={s.item}>
            <NavLink to={'/profile/'+u.id}>
                <img className={s.avatar} src={u.photos.small != null ? u.photos.small : ava} alt="avatar"/>
            </NavLink>
            <div>{u.name}</div>
            <div className="btnBlock">
                <button disabled={isFollowFetching.some(id => id === u.id)}
                        onClick={()=>toggleFollow(u.id, u.followed)}>
                    {u.followed ? "unfollow" : "follow"}
                </button>
            </div>
        </div>
    );
}

export default User;