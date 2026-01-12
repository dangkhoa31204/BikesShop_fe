import React, { useContext, useState, useRef, useEffect } from 'react';
import { ChatContext } from '../../../context/ChatContext';

export default function ChatBox({ conversation }) {
  const { messages, sendMessage } = useContext(ChatContext);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  const conversationMessages = messages[conversation.id] || [];

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversationMessages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      sendMessage(conversation.id, newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-teal-50 to-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-3xl">{conversation.sellerAvatar}</div>
            <div>
              <h2 className="font-bold text-gray-900">{conversation.sellerName}</h2>
              <p className="text-xs text-gray-500">
                {conversation.isOnline ? (
                  <span className="text-green-600">● Đang online</span>
                ) : (
                  <span className="text-gray-500">Offline</span>
                )}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" title="Gọi điện">
              📞
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" title="Thông tin">
              ℹ️
            </button>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
        {conversationMessages.length > 0 ? (
          conversationMessages.map(msg => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'buyer' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  msg.sender === 'buyer'
                    ? 'bg-teal-500 text-white rounded-br-none'
                    : 'bg-gray-200 text-gray-900 rounded-bl-none'
                }`}
              >
                <p className="break-words text-sm">{msg.text}</p>
                <p
                  className={`text-xs mt-1 ${
                    msg.sender === 'buyer' ? 'text-teal-100' : 'text-gray-500'
                  }`}
                >
                  {msg.timestamp}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500 text-center">
              <span className="text-3xl block mb-2">👋</span>
              Bắt đầu cuộc trò chuyện
            </p>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={handleSend} className="p-4 border-t border-gray-200 bg-white">
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Nhập tin nhắn..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition-colors"
          >
            Gửi
          </button>
        </div>

        {/* Info */}
        <p className="text-xs text-gray-500 mt-2">
          💡 Mẹo: Hỏi seller về tình trạng xe, giá, hoặc yêu cầu xem trực tiếp
        </p>
      </form>
    </div>
  );
}
