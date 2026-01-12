import React, { useContext } from 'react';
import { ChatContext } from '../../../context/ChatContext';

export default function ChatList({ conversations }) {
  const { activeConversationId, setActiveConversationId } = useContext(ChatContext);

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="font-bold text-gray-900">Cuộc trò chuyện</h2>
        <p className="text-xs text-gray-500">{conversations.length} người bán</p>
      </div>

      {/* Search Bar */}
      <div className="p-3 border-b border-gray-200">
        <input
          type="text"
          placeholder="Tìm kiếm..."
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto">
        {conversations.length > 0 ? (
          conversations.map(conversation => (
            <button
              key={conversation.id}
              onClick={() => setActiveConversationId(conversation.id)}
              className={`w-full p-4 border-b border-gray-100 text-left hover:bg-gray-50 transition-colors ${
                activeConversationId === conversation.id ? 'bg-teal-50 border-l-4 border-l-teal-500' : ''
              }`}
            >
              <div className="flex items-start gap-3">
                {/* Avatar */}
                <div className="flex-shrink-0 text-2xl mt-1">
                  {conversation.sellerAvatar}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  {/* Name & Status */}
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-gray-900 truncate">
                      {conversation.sellerName}
                    </h3>
                    {conversation.isOnline && (
                      <span className="text-xs text-green-600 font-medium">● Online</span>
                    )}
                  </div>

                  {/* Product Title */}
                  <p className="text-xs text-gray-500 truncate mb-1">
                    {conversation.listingTitle}
                  </p>

                  {/* Last Message */}
                  <div className="flex items-center justify-between">
                    <p className={`text-sm truncate ${
                      conversation.unreadCount > 0
                        ? 'text-gray-900 font-semibold'
                        : 'text-gray-600'
                    }`}>
                      {conversation.lastMessage}
                    </p>
                  </div>

                  {/* Time & Unread Badge */}
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-xs text-gray-500">
                      {conversation.lastMessageTime}
                    </p>
                    {conversation.unreadCount > 0 && (
                      <span className="bg-teal-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                        {conversation.unreadCount}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </button>
          ))
        ) : (
          <div className="p-8 text-center text-gray-500">
            <p className="text-sm">Chưa có cuộc trò chuyện nào</p>
          </div>
        )}
      </div>
    </div>
  );
}