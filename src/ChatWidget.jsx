import React, { useState } from "react";
import "./ChatWidget.css"; // optional styling file

const ChatWidget = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  // 👇 Replace this with your actual deployed backend URL
  const BACKEND_URL =  "https://business-card-backend-wine.vercel.app";

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user's message to the chat
    const newChat = [...chat, { sender: "user", text: message }];
    setChat(newChat);
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch(`${BACKEND_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();

      setChat([...newChat, { sender: "bot", text: data.reply || "No response" }]);
    } catch (error) {
      console.error("Error fetching chat response:", error);
      setChat([
        ...newChat,
        { sender: "bot", text: "Oops! Something went wrong. Try again later." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-widget">
      <div className="chat-header">💬 Chat with Chat GPT :</div>

      <div className="chat-messages">
        {chat.map((msg, i) => (
          <div
            key={i}
            className={`chat-bubble ${
              msg.sender === "user" ? "user-bubble" : "bot-bubble"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && <p className="loading-text">Thinking...</p>}
      </div>

      <form onSubmit={sendMessage} className="chat-input">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask me anything..."
        />
        <button type="submit" disabled={loading}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatWidget;
