import { useState } from "react";
import "./App.css"; // Import custom styles

function App() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you today?" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim() === "") return;

    // Add user's message
    setMessages((prev) => [...prev, { sender: "user", text: newMessage }]);

    // Simulate a bot reply (replace with real API logic later)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "I'm here to help!" },
      ]);
    }, 1000);

    setNewMessage("");
  };

  return (
    <div className="chatbot-app">
      <div className="chat-header">ChatBot</div>

      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-bubble ${
              message.sender === "user" ? "user-bubble" : "bot-bubble"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={newMessage}
          placeholder="Type your message..."
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;
