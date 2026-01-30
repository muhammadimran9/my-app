'use client';
import React, { useState, useEffect, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, onValue, serverTimestamp } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCxtPE4mUZV8dV39rRhVMC-F9CgphLTwUo",
  authDomain: "portfolio-project-14a25.firebaseapp.com",
  databaseURL: "https://portfolio-project-14a25-default-rtdb.firebaseio.com",
  projectId: "portfolio-project-14a25",
  storageBucket: "portfolio-project-14a25.firebasestorage.app",
  messagingSenderId: "826236365085",
  appId: "1:826236365085:web:eea249bf097a52244e59f4"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [username, setUsername] = useState('');
  const [isUsernameSet, setIsUsernameSet] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const messagesRef = ref(database, 'messages');
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messageList = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value
        }));
        setMessages(messageList.sort((a, b) => a.timestamp - b.timestamp));
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const messagesRef = ref(database, 'messages');
    await push(messagesRef, {
      text: newMessage,
      username: username,
      timestamp: serverTimestamp()
    });

    setNewMessage('');
  };

  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      setIsUsernameSet(true);
    }
  };

  if (!isUsernameSet) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-neutral-900">
        <div className="bg-neutral-800 p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Join Live Chat</h2>
          <form onSubmit={handleUsernameSubmit}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg bg-neutral-700 text-white border border-neutral-600 focus:border-blue-500 focus:outline-none"
              maxLength={20}
              required
            />
            <button
              type="submit"
              className="w-full mt-4 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start Chatting
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-neutral-900">
      <div className="bg-neutral-800 p-4 border-b border-neutral-700">
        <h1 className="text-xl font-bold text-white">🔴 Live Chat</h1>
        <p className="text-neutral-400 text-sm">Welcome, {username}!</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.username === username ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.username === username
                  ? 'bg-blue-600 text-white'
                  : 'bg-neutral-700 text-white'
              }`}
            >
              {message.username !== username && (
                <p className="text-xs text-neutral-300 mb-1">{message.username}</p>
              )}
              <p>{message.text}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={sendMessage} className="p-4 bg-neutral-800 border-t border-neutral-700">
        <div className="flex space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-3 rounded-lg bg-neutral-700 text-white border border-neutral-600 focus:border-blue-500 focus:outline-none"
            maxLength={500}
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatApp;