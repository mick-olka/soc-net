import React, {useEffect, useState} from "react";
import s from "./ProfileInfo.module.css";

const ProfileStatus = (props) => {
    //
    // state = {
    //     editMode: false,
    //     status: this.props.status,
    // }
    //
    // activateEditMode = () => {
    //     this.setState({
    //         editMode: true,
    //         status: this.props.status,
    //     });
    // }
    //
    // deactivateEditMode = () => {
    //     this.setState({
    //         editMode: false,
    //     });
    //     this.props.updateProfileStatus(this.state.status);
    // }
    //
    // onStatusChange = (e) => {
    //
    //     this.setState({
    //         status: e.currentTarget.value,
    //     });
    // }
    //
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     // console.log("status did update with props: " + this.props.status);
    //     // console.log(this.props);
    // }
    //
    // render() {
    //console.log("status did render with status: " + this.props.status);
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status] );

    const activateEditMode = () => {
        if (props.profileId === props.myId) setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateProfileStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
            <div>
                    <span className={s.about} onDoubleClick={activateEditMode}>
                        {props.status || "------"}
                    </span>
            </div>
            }

            {editMode &&
            <div>
                <input autoFocus={true} onBlur={deactivateEditMode} type="text"
                       value={status}
                       onChange={onStatusChange}
                />
            </div>  //  onBlur -- activates when clicked outside
            }
        </div>
    );
}
// }

export default ProfileStatus;
