import React, { useState, useEffect } from 'react' 
import {setMessage as setTheMessage} from '../../../actions/Message.action'
import MessageStore from "../../../stores/Message.store"
import styleModule from "./TypeMessage.module.css"
import sendToDiscord from "../../../backend/sendMessage"
export default () => { 


    const [message, setMessage] = useState(MessageStore.getMessage())
    useEffect(() => {
        MessageStore.on('change', ()=> {
            setMessage(MessageStore.getMessage())
        })
    }, [])
    
    const keyDown = (e) => { 
        if(e.which == 13 && !e.shiftKey) { 
            e.preventDefault() 
            sendToDiscord(message)
            setMessage("")
        }
    }

    return (<>
        <div> 
            <textarea onKeyDown={(e)=>{keyDown(e)}} className={styleModule.textArea}value={message} onChange={(e)=>{setTheMessage(e.target.value)}}> 
            
            </textarea>
        </div> 
    </>);
}