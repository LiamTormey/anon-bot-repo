import dispatcher from "../dispatcher"
import { Dispatcher } from "flux"

export function setMessage(message) { 
    dispatcher.dispatch({type: "SET_MESSAGE", message})
}

export function setTitle(title) { 
    dispatcher.dispatch({type:"SET_TITLE", title})
}
