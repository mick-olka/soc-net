import React from "react";
import s from "./Users.module.css";
import ava from "../../img/Avatar.png";
import {NavLink} from "react-router-dom";

let Users = (props) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className="content">
            <h1 id="heading">Worldwide</h1>
            <div className={s.pageIndex}>
                {pages.map((p) => {
                    if (p===6) return <span key={p} >...</span>
                    if (p<5 || p>pagesCount-3)
                        return <span
                            key={p}
                            onClick={(e) => {props.onPageChanged(p)}}
                            className={props.currentPage === p ? s.selectedPage : undefined}>{p}</span>;
                    return null;
                })}
            </div>
            <div className="list">
                {props.users.map((u) => (
                    <div key={u.id} className={s.item}>
                        <NavLink to={'/profile/'+u.id}>
                        <img className={s.avatar} src={u.photos.small != null ? u.photos.small : ava} alt="avatar"/>
                        </NavLink>
                        <div>{u.name}</div>
                        <div className="btnBlock">
                            <button disabled={props.isFollowFetching.some(id => id === u.id)}
                                    onClick={()=>props.toggleFollow(u.id)}>
                                {u.followed ? "unfollow" : "follow"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Users;