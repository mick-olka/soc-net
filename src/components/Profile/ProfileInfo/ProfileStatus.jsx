import React from "react";
import s from "./ProfileInfo.module.css";
import {render} from "react-dom";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        });
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span className={s.about} onDoubleClick={this.activateEditMode}>
                        {this.props.status}
                    </span>
                </div>
                }

                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deactivateEditMode} type="text" value={this.props.status}/>
                </div>
                    //  onBlur -- activates when clicked outside
                }
            </div>
        );
    }
}

export default ProfileStatus;
