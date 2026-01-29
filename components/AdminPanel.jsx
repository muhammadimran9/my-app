"use client";

import React, { useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { collection, onSnapshot, orderBy, query, doc, updateDoc, deleteDoc } from 'firebase/firestore';

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('messages');
  const [chatMessages, setChatMessages] = useState([]);
  const [contactForms, setContactForms] = useState([]);
  const [stats, setStats] = useState({ totalMessages: 0, totalContacts: 0, unreadContacts: 0 });

  // Simple admin authentication (in production, use proper auth)
  const ADMIN_PASSWORD = 'admin123'; // Change this to a secure password

  useEffect(() => {
    if (!isAuthenticated) return;

    // Listen to chat messages
    const chatQuery = query(collection(db, 'chatMessages'), orderBy('timestamp', 'desc'));
    const unsubscribeChat = onSnapshot(chatQuery, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ id: doc.id, ...doc.data() });
      });
      setChatMessages(messages);
    });

    // Listen to contact forms
    const contactQuery = query(collection(db, 'contactForms'), orderBy('timestamp', 'desc'));
    const unsubscribeContact = onSnapshot(contactQuery, (querySnapshot) => {
      const forms = [];
      querySnapshot.forEach((doc) => {
        forms.push({ id: doc.id, ...doc.data() });
      });
      setContactForms(forms);
      
      // Calculate stats
      const unreadCount = forms.filter(form => form.status === 'unread').length;
      setStats({
        totalMessages: messages.length,
        totalContacts: forms.length,
        unreadContacts: unreadCount
      });
    });

    return () => {
      unsubscribeChat();
      unsubscribeContact();
    };
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPassword('');
    } else {
      alert('Invalid password');
    }
  };

  const markAsRead = async (contactId) => {
    try {
      await updateDoc(doc(db, 'contactForms', contactId), {
        status: 'read'
      });
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  const deleteContact = async (contactId) => {
    if (confirm('Are you sure you want to delete this contact?')) {
      try {
        await deleteDoc(doc(db, 'contactForms', contactId));
      } catch (error) {
        console.error('Error deleting contact:', error);
      }
    }
  };

  const deleteChatMessage = async (messageId) => {
    if (confirm('Are you sure you want to delete this message?')) {
      try {
        await deleteDoc(doc(db, 'chatMessages', messageId));
      } catch (error) {
        console.error('Error deleting message:', error);
      }
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-neutral-900 flex items-center justify-center p-4">
        <div className="bg-neutral-800 rounded-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full p-3 rounded-lg bg-neutral-700 text-white border border-neutral-600 focus:border-blue-500 focus:outline-none mb-4"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-900">
      <div className="bg-neutral-800 p-4 border-b border-neutral-700">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">Total Chat Messages</h3>
            <p className="text-3xl font-bold text-blue-400">{stats.totalMessages}</p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">Total Contacts</h3>
            <p className="text-3xl font-bold text-green-400">{stats.totalContacts}</p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">Unread Contacts</h3>
            <p className="text-3xl font-bold text-red-400">{stats.unreadContacts}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('messages')}
            className={`px-6 py-3 rounded-lg font-medium transition duration-200 ${
              activeTab === 'messages'
                ? 'bg-blue-600 text-white'
                : 'bg-neutral-700 text-neutral-300 hover:bg-neutral-600'
            }`}
          >
            Chat Messages ({chatMessages.length})
          </button>
          <button
            onClick={() => setActiveTab('contacts')}
            className={`px-6 py-3 rounded-lg font-medium transition duration-200 ${
              activeTab === 'contacts'
                ? 'bg-blue-600 text-white'
                : 'bg-neutral-700 text-neutral-300 hover:bg-neutral-600'
            }`}
          >
            Contact Forms ({contactForms.length})
          </button>
        </div>

        {/* Content */}
        {activeTab === 'messages' && (
          <div className="bg-neutral-800 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">Chat Messages</h2>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {chatMessages.map((message) => (
                <div key={message.id} className="bg-neutral-700 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="font-semibold text-blue-400">{message.username}</span>
                      <span className="text-neutral-400 text-sm ml-2">
                        {message.createdAt ? new Date(message.createdAt).toLocaleString() : 'Unknown time'}
                      </span>
                    </div>
                    <button
                      onClick={() => deleteChatMessage(message.id)}
                      className="text-red-400 hover:text-red-300 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                  <p className="text-white">{message.text}</p>
                </div>
              ))}
              {chatMessages.length === 0 && (
                <p className="text-neutral-400 text-center py-8">No chat messages yet</p>
              )}
            </div>
          </div>
        )}

        {activeTab === 'contacts' && (
          <div className="bg-neutral-800 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">Contact Form Submissions</h2>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {contactForms.map((contact) => (
                <div
                  key={contact.id}
                  className={`p-4 rounded-lg border-l-4 ${
                    contact.status === 'unread'
                      ? 'bg-neutral-700 border-red-500'
                      : 'bg-neutral-750 border-green-500'
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-white">{contact.name}</h3>
                      <p className="text-blue-400 text-sm">{contact.email}</p>
                      <p className="text-neutral-400 text-sm">
                        {contact.createdAt ? new Date(contact.createdAt).toLocaleString() : 'Unknown time'}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      {contact.status === 'unread' && (
                        <button
                          onClick={() => markAsRead(contact.id)}
                          className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
                        >
                          Mark Read
                        </button>
                      )}
                      <button
                        onClick={() => deleteContact(contact.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <div className="mb-2">
                    <span className="font-medium text-neutral-300">Subject: </span>
                    <span className="text-white">{contact.subject}</span>
                  </div>
                  <div>
                    <span className="font-medium text-neutral-300">Message: </span>
                    <p className="text-white mt-1">{contact.message}</p>
                  </div>
                </div>
              ))}
              {contactForms.length === 0 && (
                <p className="text-neutral-400 text-center py-8">No contact form submissions yet</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;