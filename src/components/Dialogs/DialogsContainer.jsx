
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogsReducer";

import Dialogs from "./Dialogs";
import { connect } from "react-redux";
// eslint-disable-next-line no-unused-vars
import React from "react";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
  return{
    dialogsPage: state.dialogsPage,
  }
}
//
// let mapDispatchToProps = (dispatch) => {
//   return{
//     updateNewMessageBody: (body)=>{   // body comes from function call in Dialogs.jsx
//       dispatch(updateNewMessageBodyCreator(body));
//     },
//     sendMessage: ()=>{
//       dispatch(sendMessageCreator())
//     },
//   }
// }

//let AuthRedirectComponent = WithAuthRedirect(Dialogs);

//const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default compose(
    connect(mapStateToProps, {updateNewMessageBodyCreator, sendMessageCreator}),
    WithAuthRedirect
)(Dialogs);

//export default DialogsContainer;
