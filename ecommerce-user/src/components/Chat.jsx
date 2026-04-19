import React, { useState } from "react";
import "./Chat.css";
import { SendIcon } from "./CustomTag";
import Message from "./Message";

const Chat = ({data}) => {
    let messageList = [
        {isMe:true, name:"나", message: "안녕하세요1", date: "2025-12-28", time: "09:00"},
        {isMe:false, name:"상대방", message: "안녕하세요1", date: "2025-12-28", time: "09:00"},
        {isMe:false, name:"상대방", message: "안녕하세요2", date: "2025-12-28", time: "09:00"},
        {isMe:false, name:"상대방", message: "안녕하세요3", date: "2025-12-28", time: "09:00"},
        {isMe:true, name:"나", message: "안녕하세요2", date: "2025-12-28", time: "09:00"},
        {isMe:true, name:"나", message: "안녕하세요3", date: "2025-12-28", time: "09:00"},
        {isMe:false, name:"상대방", message: "안녕하세요4", date: "2025-12-28", time: "09:00"},
        {isMe:false, name:"상대방", message: "안녕하세요5", date: "2025-12-28", time: "09:00"},
        {isMe:false, name:"상대방", message: "안녕하세요5", date: "2025-12-28", time: "09:00"},
        {isMe:false, name:"상대방", message: "안녕하세요5", date: "2025-12-28", time: "09:00"},
        {isMe:false, name:"상대방", message: "안녕하세요5", date: "2025-12-28", time: "09:00"},
        {isMe:false, name:"상대방", message: "안녕하세요5", date: "2025-12-28", time: "09:00"},
        {isMe:false, name:"상대방", message: "안녕하세요5", date: "2025-12-28", time: "09:00"},
        {isMe:false, name:"상대방", message: "안녕하세요5", date: "2025-12-28", time: "09:00"},
        {isMe:false, name:"상대방", message: "안녕하세요5", date: "2025-12-28", time: "09:00"},
        {isMe:false, name:"상대방", message: "안녕하세요5", date: "2025-12-28", time: "09:00"},
        {isMe:false, name:"상대방", message: "안녕하세요5", date: "2025-12-28", time: "09:00"},
        {isMe:false, name:"상대방", message: "안녕하세요5", date: "2025-12-28", time: "09:00"},
        {isMe:false, name:"상대방", message: "안녕하세요5", date: "2025-12-28", time: "09:00"},
        {isMe:false, name:"상대방", message: "안녕하세요5", date: "2025-12-28", time: "09:00"},
        {isMe:false, name:"상대방", message: "안녕하세요5", date: "2025-12-28", time: "09:00"},
        {isMe:false, name:"상대방", message: "안녕하세요6", date: "2025-12-28", time: "09:00"}
    ];

    return (
        <div className="chat-window">
            <div className="chat-header">대화</div>
            <div className="chat-messages">
                {messageList.map((data) => 
                    <Message data={data} />
                )}
            </div>
            <div className="chat-input-area">
                <textarea placeholder="채팅을 입력해주세요 ...." />
                <button className="send-btn">
                    <SendIcon />
                </button>
            </div>
        </div>
    )
}

export default Chat;