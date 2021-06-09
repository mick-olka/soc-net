import React from "react";
import ava from "../../img/Avatar.png";
import s from "./Users.module.css";
import { updateNewMessageBodyCreator } from "../../redux/dialogsReducer";
import * as axios from "axios";

const UsersF = (props) => {

  if (props.users.length === 0) {

    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
      //debugger;
      props.setUsers(response.data.items);
    });
  }

  return (
    <div className="content">
      <h1 id="heading">Worldwide</h1>
      <div className="list">
        {props.users.map((u) => (
          <div className={s.item} key={updateNewMessageBodyCreator.id}>
            <img className={s.avatar} src={u.photos.small!=null ? u.photos.small : ava } alt="photo"/>
            <div>{u.name}</div>
            <div className="btnBlock">
              <button onClick={() => props.toggleFollow(u.id)}>
                {u.followed ? "unfollow" : "follow"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersF;
