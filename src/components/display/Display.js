import TopDisplay from "./TopDisplay"
import MessageForm from "./MessageForm"
import './Display.css'
import ChatLog from "./ChatLog"




export default function Display(){
    return (
        <div className="Display">
            <TopDisplay />
            <ChatLog />
            <MessageForm />

        </div>
    )
}