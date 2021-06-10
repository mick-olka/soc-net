import React from "react";
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: "",
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

    updateLocalStatus = (data) => {
        this.setState({
            status: data,
        });
    }

    componentDidMount() {
        console.log(this.props.status);
        if (this.props.status!==null) this.updateLocalStatus(this.props.status);
    }

    render() {
        let statusInput = React.createRef();
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span className={s.about} onDoubleClick={this.activateEditMode}>
                        {this.state.status}
                    </span>
                </div>
                }

                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deactivateEditMode} type="text"
                        value={this.state.status}
                        onChange={()=>this.updateLocalStatus(statusInput.current.value)}
                        ref={statusInput}
                    />
                </div>
                    //  onBlur -- activates when clicked outside
                }
            </div>
        );
    }
}

export default ProfileStatus;
