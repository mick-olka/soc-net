import React from "react";
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
            status: this.props.status,
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateProfileStatus(this.state.status);
    }

    onStatusChange = (e) => {

        this.setState({
            status: e.currentTarget.value,
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log("status did update with props: " + this.props.status);
        // console.log(this.props);
    }

    render() {
        //console.log("status did render with status: " + this.props.status);
        if (this.props.profileId===this.props.myId) {
            return (
                <div>
                    {!this.state.editMode &&
                    <div>
                    <span className={s.about} onDoubleClick={this.activateEditMode}>
                        {this.props.status || "------"}
                    </span>
                    </div>
                    }

                    {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode} type="text"
                               value={this.state.status}
                               onChange={this.onStatusChange}
                        />
                    </div>
                        //  onBlur -- activates when clicked outside
                    }
                </div>
            );
        } else return (
            <div>
                    <span className={s.about}>
                        {this.props.status}
                    </span>
            </div>
        );
    }
}

export default ProfileStatus;
