import React, { useState } from "react";
import "./Message.css";
import { Avatar, AvatarFallback, UserIcon } from "./CustomTag";

const Message = ({data}) => {
    return (
        <div className={`chat-message-container ${data.isMe ? "is-me-container" : ""}`}>
            {
                !data.isMe &&
                <div className="chat-user-info">
                    <div className="avatar-icon-container">
                        <Avatar className="message-seller-avatar">
                            <AvatarFallback className="message-avatar-fallback">
                                <UserIcon className="message-seller-avatar-icon" />
                            </AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="chat-user-name">{data.name}</div>
                </div>
            }
            <div className={`message-container ${data.isMe ? "" : "margin-left"}`}>
                {
                    data.isMe && 
                    <div className="chat-message-date-container">
                        <span>{data.date}</span>
                        <span>{data.time}</span>
                    </div>
                }
                <div className={`message-box ${data.isMe ? "is-me" : ""}`}>
                    <span>{data.message}</span>
                </div>
                {
                    !data.isMe && 
                    <div className="chat-message-date-container">
                        <span>{data.date}</span>
                        <span>{data.time}</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default Message;