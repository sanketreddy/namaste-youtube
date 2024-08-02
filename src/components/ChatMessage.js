import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        alt="user thumbnail"
        src="https://yt4.ggpht.com/ytc/AIdro_neCUP0803Bcj2HPBV0bQsen1KeYJTZxvAEwgQUwk2fy3k=s32-c-k-c0x00ffffff-no-rj"
        className="h-8 rounded-2xl"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
