import React, { useContext, useEffect } from 'react';
import { ChatContext } from '../../../context/ChatContext';
import ChatList from '../components/ChatList';
import ChatBox from '../components/ChatBox';

export default function ChatPage() {
  const { conversations, markAsRead, activeConversationId } = useContext(ChatContext);
  const activeConversation = conversations.find(c => c.id === activeConversationId);

  useEffect(() => {
    // Mark current conversation as read
    if (activeConversationId) {
      markAsRead(activeConversationId);
    }
  }, [activeConversationId, markAsRead]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">💬 Tin nhắn</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
          {/* Left - Conversations List */}
          <div className="lg:col-span-1">
            <ChatList conversations={conversations} />
          </div>

          {/* Right - Chat Detail */}
          <div className="lg:col-span-2">
            {activeConversation ? (
              <ChatBox conversation={activeConversation} />
            ) : (
              <div className="bg-white rounded-lg p-12 text-center flex flex-col items-center justify-center h-full">
                <p className="text-6xl mb-4">💬</p>
                <p className="text-gray-500 text-lg">Chọn một cuộc trò chuyện để bắt đầu</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
