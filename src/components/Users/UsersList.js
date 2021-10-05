import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import Preloader from "../common/Preloader/Preloader";

let UsersList = (props) => {

    let usersList = props.users.map((u) => {
        return <User key={u.id} user={u} isFollowFetching={props.isFollowFetching} toggleFollow={props.toggleFollow} />
});

    return <div className="content">
            <h1 id="heading">Worldwide</h1>
            <Paginator
            totalItemsCount={props.totalUsersCount}
            pageSize={props.pageSize}
            onPageChanged={props.onPageChanged}
            setPortionNum={props.setPortionNum}
            currentPage={props.currentPage}
            portionSize={5}
            portionNum={props.portionNum}
            />
            {props.isFetching ? <Preloader/> : <div className="list">{usersList}</div>}
            {/*{props.isFetching ? <div className="list">*/}
            {/*    {usersList}*/}
            {/*</div> : <Preloader/>}*/}
        </div>;
}

export default UsersList;