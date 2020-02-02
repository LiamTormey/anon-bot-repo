import { EventEmitter } from 'events'
import MessageTypes from '../constants/MessageTypes'
import Dispatcher from "../dispatcher"
import ActionTypes from "../constants/ActionTypes"

class MessageTypeStore extends EventEmitter { 
    constructor() { 
        super() 
        this.messageType = {DisplayText: "N/A Message", id: "N/A_MESSAGE"}
    }

    setMessageType(type) { 
        this.messageType = type 
        this.emit('change')
    }

    handleAction( action ) { 
        switch(action.type) { 
            case ActionTypes.setMessageType: { 
                this.messageType = action.messageType
            }
        }
    }

    getMessageType() { 
        return {...this.messageType}
    }
}

const messageTypeStore = new MessageTypeStore
window.dispatcher = Dispatcher 
Dispatcher.register(messageTypeStore.handleAction.bind(messageTypeStore))
export default messageTypeStore