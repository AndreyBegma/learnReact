import { connect } from "react-redux";
import { updateNewBodyMessageBodyCreator, sendMessageCreator } from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
     return {
          dialogsPage: state.dialogsPage
     }
}

let mapDispatchToProps = (dispatch) => {
     return {
          updateNewBodyMessageBody: (body) => {
               dispatch(updateNewBodyMessageBodyCreator(body))
          },
          sendMessage: () => {
               dispatch(sendMessageCreator())
          }
     }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer