'use client';
import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, remove } from 'firebase/database';

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

const AdminPanel = () => {
  const [messages, setMessages] = useState([]);
  const [stats, setStats] = useState({
    totalMessages: 0,
    uniqueUsers: 0,
    todayMessages: 0,
    onlineUsers: 0
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!isAuthenticated) return;

    const messagesRef = ref(database, 'messages');
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messageList = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value
        }));
        
        setMessages(messageList.sort((a, b) => b.timestamp - a.timestamp));
        
        // Calculate stats
        const uniqueUsers = [...new Set(messageList.map(msg => msg.username))].length;
        const today = new Date().toDateString();
        const todayMessages = messageList.filter(msg => 
          new Date(msg.timestamp).toDateString() === today
        ).length;

        setStats({
          totalMessages: messageList.length,
          uniqueUsers,
          todayMessages,
          onlineUsers: Math.floor(Math.random() * 10) + 1 // Simulated
        });
      }
    });

    return () => unsubscribe();
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Wrong password!');
    }
  };

  const deleteMessage = async (messageId) => {
    if (confirm('Delete this message?')) {
      await remove(ref(database, `messages/${messageId}`));
    }
  };

  const clearAllMessages = async () => {
    if (confirm('Delete ALL messages? This cannot be undone!')) {
      await remove(ref(database, 'messages'));
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-neutral-900">
        <div className="bg-neutral-800 p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Admin Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full p-3 rounded-lg bg-neutral-700 text-white border border-neutral-600 focus:border-blue-500 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="w-full mt-4 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Login
            </button>
          </form>
          <p className="text-neutral-400 text-xs mt-4 text-center">Password: admin123</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Chat Admin Panel</h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-neutral-400 text-sm">Total Messages</h3>
            <p className="text-3xl font-bold text-white">{stats.totalMessages}</p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-neutral-400 text-sm">Unique Users</h3>
            <p className="text-3xl font-bold text-white">{stats.uniqueUsers}</p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-neutral-400 text-sm">Today's Messages</h3>
            <p className="text-3xl font-bold text-white">{stats.todayMessages}</p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-neutral-400 text-sm">Online Users</h3>
            <p className="text-3xl font-bold text-green-400">{stats.onlineUsers}</p>
          </div>
        </div>

        {/* Messages Management */}
        <div className="bg-neutral-800 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white">Messages Management</h2>
            <button
              onClick={clearAllMessages}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Clear All Messages
            </button>
          </div>

          <div className="space-y-4 max-h-96 overflow-y-auto">
            {messages.map((message) => (
              <div key={message.id} className="bg-neutral-700 p-4 rounded-lg flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-blue-400">{message.username}</span>
                    <span className="text-neutral-400 text-sm">
                      {new Date(message.timestamp).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-white">{message.text}</p>
                </div>
                <button
                  onClick={() => deleteMessage(message.id)}
                  className="ml-4 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          {messages.length === 0 && (
            <div className="text-center text-neutral-400 py-8">
              No messages yet
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;