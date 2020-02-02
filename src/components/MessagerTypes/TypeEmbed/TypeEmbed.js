import React, { useState, useEffect } from 'react' 
import {setMessage as setTheMessage, setTitle as setTheTitle} from '../../../actions/Message.action'
import MessageStore from "../../../stores/Message.store"
import styleModule from "./TypeEmbed.module.css"
import sendEmbed from "../../../backend/sendEmbed"

const FieldAdder = (props) => { 
    return (<> 
        Field Adder
    </>);
}

const Field = (props) => { 
    return (<div className={styleModule.field}> 
        <input c placeholder='Field Title' className={[styleModule.inputField, styleModule.key].join(' ')}/>
        <input placeholder='Field Value' className={[styleModule.inputField, styleModule.value].join(' ')}/>
    </div>);
}


export default () => { 
    const [message, setMessage] = useState(MessageStore.getMessage())
    const [title, setTitle] = useState(MessageStore.getTitle())
    useEffect(() => {
        MessageStore.on('change', ()=> {
            console.log("{{{",MessageStore.getTitle())
            setMessage(MessageStore.getMessage())
            setTitle(MessageStore.getTitle())
        })
    }, [])

    const componentOnChange = (componentName, event) => { 
        switch(componentName) { 
            case "title": { 
                setTheTitle(event.target.value)
                break; 
            }
            case "message": { 
                setTheMessage(event.target.value)
                break; 
            }
        }
    }

    const send = () => { 
        sendEmbed(title, message)
    }

    return (<>
        <div className={styleModule.embed}> 
            <input placeholder='title' className={styleModule.inputField} value={title} onChange={(e) => {componentOnChange('title', e)}}/>
            <textarea placeholder='text' className={styleModule.textArea} onChange={(e) => {componentOnChange('message', e)}}>
                {message}
            </textarea>
            <div>
                <div className={styleModule.fieldsHeader}> 
                    <div className={styleModule.fieldsTitle}>Fields</div> 
                    <div className={styleModule.fieldsButtons}>
                        <button className={styleModule.button}> Add </button>
                    </div> 
                </div>     
                <div className={styleModule.fields}> 
                    <Field> </Field>
                    <Field> </Field>
                </div> 
                <button onClick={(e) => {send(e)}} className={styleModule.button}> Send </button>
                <div> 
                    i only had 2 hours to work on this so it looks shit dont judge me; ill fix dis shit later<br/>and the fields dont work yet
                </div>
            </div> 
        </div> 
    </>);
}