import React, {useEffect, useState} from 'react'
import MessageTypes from "../../constants/MessageTypes"
import MessageTypeStore from "../../stores/MessageType.store"
import { setMessageType } from "../../actions/MessageType.action"
import TypeMessage from "../MessagerTypes/TypeMessage/TypeMessage"
import TypeEmbed from '../MessagerTypes/TypeEmbed/TypeEmbed'
import styleModule from "./MessageTypeChanger.module.css"
export default () => { 

    const [messageType, setMessageType] = useState(MessageTypes[0])

    useEffect(() => { 
        MessageTypeStore.on('change', ()=> { 
            console.log(MessageTypeStore.getMessageType().DisplayText)
            setMessageType(MessageTypeStore.getMessageType())
        })
    }, [])


    return ( 
        <div className={styleModule.messageTypeChanger}> 
            <div className={styleModule.content}>
                <div className={styleModule.header}> 
                    <div className={styleModule.title}>{messageType.DisplayText}</div>
                    <select onChange={(e)=>{
                        setMessageType(MessageTypes[e.target.options[e.target.selectedIndex].value])
                    }} className={styleModule.selector}> 
                        {MessageTypes.map( (messageType, i) => <option value={i}>{messageType.DisplayText}</option>)}
                    </select>
                </div> 
                <div className={styleModule.description}> 
                    Send a Message to skeps server. Created by Teh#8467
                </div> 
                <div className={styleModule.body}> 
                    <div> 
                        {(()=>{
                            switch(messageType.id) { 
                                case "MESSAGE_TYPE_MESSAGE": { 
                                    return (
                                        <TypeMessage></TypeMessage>
                                    );
                                }
                                case "MESSAGE_TYPE_EMBED": { 
                                    return ( 
                                        <TypeEmbed></TypeEmbed>
                                    );
                                }
                                default: { 
                                    return (
                                        <>Area not available.</>
                                    );
                                }
                            }
                        })()}
                    </div> 
                </div> 
                
               
            </div> 
        </div>
    );
}