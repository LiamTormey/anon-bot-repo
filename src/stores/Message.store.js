import EventEmiiter from 'events'
import Dispatcher from "../dispatcher"
class MessageStore extends EventEmiiter { 
    constructor() { 
        super(); 
        this.message = ""
        this.title = ""
        
    }


    //MESSAGE 

    setMessage(message) { 
        this.message = String(message) 
        this.emit('change')
    }

    getMessage() { 
        return new String(this.message)
    }

    //TITLE 

    setTitle(title) { 
        this.title = String(title) 
        this.emit('change')
    }

    getTitle() { 
        return new String(this.title) 
    }

    
    handleAction(action) { 
        switch(action.type) { 
            case "SET_MESSAGE": { 
                this.setMessage(action.message)
                break;
            }
            case "SET_TITLE": { 
                this.setTitle(action.title)
                break;
            }
        }
    }
}

const messageStore = new MessageStore
Dispatcher.register(messageStore.handleAction.bind(messageStore))
export default messageStore; 