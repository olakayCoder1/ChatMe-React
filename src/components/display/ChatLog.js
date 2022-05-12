import Users from "../navbar/UserContainer"
import './ChatLog.css'
import MessageContainer from "./MessageContainer"



export default function ChatLog(){
    return (
        <div className="ChatLog">
            <MessageContainer />
            <MessageContainer />
            <MessageContainer />
            <MessageContainer />
        </div>
    )
}