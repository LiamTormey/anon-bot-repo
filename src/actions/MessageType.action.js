import dispatcher from "../dispatcher"

export function setMessageType(messageType) { 
    dispatcher.dispatch(messageType)
}