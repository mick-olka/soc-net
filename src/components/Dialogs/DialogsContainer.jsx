

import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogsReducer";

import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return{
    dialogsPage: state.dialogsPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return{
    updateNewMessageBody: (body)=>{
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: ()=>{
      dispatch(sendMessageCreator())
    },
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

// const DialogsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
        
//         let sendMessage = () => {
//           store.dispatch(sendMessageCreator());
//         };

//         let onMessageChange = (text) => {
//           let action = updateNewMessageBodyCreator(text);
//           store.dispatch(action);
//         };

//         return (
//           <Dialogs
//             sendMessage={sendMessage}
//             onMessageChange={onMessageChange}
//             dialogsPage={store.getState().dialogsPage}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

export default DialogsContainer;
