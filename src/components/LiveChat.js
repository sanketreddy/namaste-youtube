import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveChatMessage, setLiveChatMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);
  //   console.log(chatMessages);

  function handleLiveChatMessages(value) {
    setLiveChatMessage(value);
  }

  function handleFormData(e) {
    e.preventDefault();
    dispatch(
      addMessage({
        name: "Sanket Reddy",
        message: liveChatMessage,
      })
    );

    setLiveChatMessage("");
  }

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling here we can make an API call get the JSON data and then dispatch an action
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + " 🚀",
        })
      );
    }, 500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, index) => {
            return (
              <ChatMessage name={c.name} message={c.message} key={index} />
            );
          })}
        </div>
      </div>

      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          handleFormData(e);
        }}
      >
        <input
          type="text"
          placeholder="Type your message"
          className="w-96 p-2"
          value={liveChatMessage}
          onChange={(e) => handleLiveChatMessages(e.target.value)}
        />
        <button className="p-2 m-2 bg-green-100 rounded-lg">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
