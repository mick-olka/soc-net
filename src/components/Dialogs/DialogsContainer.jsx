
import {
  sendMessageCreator,
} from "../../redux/dialogsReducer";

import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
  return{
    dialogsPage: state.dialogsPage,
  }
}

export default compose(
    connect(mapStateToProps, {sendMessageCreator}),
    WithAuthRedirect
)(Dialogs);

//export default DialogsContainer;
