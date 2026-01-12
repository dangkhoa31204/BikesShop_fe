import React, { createContext, useState, useCallback } from 'react';

export const ChatContext = createContext();

export function ChatProvider({ children }) {
  // Conversations list
  const [conversations, setConversations] = useState([
    {
      id: 'conv_1',
      sellerId: 'seller_001',
      sellerName: 'Cửa hàng Xe Đạp Sài Gòn',
      sellerAvatar: '🏪',
      lastMessage: 'Còn hàng không ạ?',
      lastMessageTime: '2 phút trước',
      unreadCount: 2,
      isOnline: true,
      listingId: 1,
      listingTitle: 'Giant Escape 3 2023',
    },
    {
      id: 'conv_2',
      sellerId: 'seller_002',
      sellerName: 'Cửa hàng Xe Quang Trung',
      sellerAvatar: '🏪',
      lastMessage: 'Tôi có thêm ảnh khác ạ',
      lastMessageTime: '1 giờ trước',
      unreadCount: 0,
      isOnline: false,
      listingId: 2,
      listingTitle: 'Trek FX 3 2022',
    },
    {
      id: 'conv_3',
      sellerId: 'seller_003',
      sellerName: 'Specialized Saigon Store',
      sellerAvatar: '🏪',
      lastMessage: 'Bạn muốn xem trực tiếp không?',
      lastMessageTime: '3 giờ trước',
      unreadCount: 1,
      isOnline: true,
      listingId: 3,
      listingTitle: 'Specialized Rockhopper 2024',
    },
  ]);

  // Messages grouped by conversation
  const [messages, setMessages] = useState({
    conv_1: [
      {
        id: 'msg_1',
        conversationId: 'conv_1',
        sender: 'seller',
        senderName: 'Cửa hàng Xe Đạp Sài Gòn',
        text: 'Xin chào! Bạn quan tâm đến xe này à?',
        timestamp: '10:30',
        date: '2024-01-12',
      },
      {
        id: 'msg_2',
        conversationId: 'conv_1',
        sender: 'buyer',
        senderName: 'Bạn',
        text: 'Vâng, xe này còn hàng không ạ?',
        timestamp: '10:35',
        date: '2024-01-12',
      },
      {
        id: 'msg_3',
        conversationId: 'conv_1',
        sender: 'seller',
        senderName: 'Cửa hàng Xe Đạp Sài Gòn',
        text: 'Còn hàng không ạ?',
        timestamp: '10:40',
        date: '2024-01-12',
      },
    ],
    conv_2: [
      {
        id: 'msg_4',
        conversationId: 'conv_2',
        sender: 'buyer',
        senderName: 'Bạn',
        text: 'Xe này phù hợp để tập luyện không?',
        timestamp: '09:15',
        date: '2024-01-12',
      },
      {
        id: 'msg_5',
        conversationId: 'conv_2',
        sender: 'seller',
        senderName: 'Cửa hàng Xe Quang Trung',
        text: 'Tôi có thêm ảnh khác ạ',
        timestamp: '09:20',
        date: '2024-01-12',
      },
    ],
    conv_3: [
      {
        id: 'msg_6',
        conversationId: 'conv_3',
        sender: 'seller',
        senderName: 'Specialized Saigon Store',
        text: 'Bạn muốn xem trực tiếp không?',
        timestamp: '08:50',
        date: '2024-01-12',
      },
    ],
  });

  const [activeConversationId, setActiveConversationId] = useState('conv_1');

  // Send message
  const sendMessage = useCallback((conversationId, text) => {
    if (!text.trim()) return;

    const newMessage = {
      id: `msg_${Date.now()}`,
      conversationId,
      sender: 'buyer',
      senderName: 'Bạn',
      text,
      timestamp: new Date().toLocaleTimeString('vi-VN', {
        hour: '2-digit',
        minute: '2-digit',
      }),
      date: new Date().toLocaleDateString('vi-VN'),
    };

    setMessages(prev => ({
      ...prev,
      [conversationId]: [...(prev[conversationId] || []), newMessage],
    }));

    // Update conversation last message
    setConversations(prev =>
      prev.map(conv =>
        conv.id === conversationId
          ? {
              ...conv,
              lastMessage: text,
              lastMessageTime: 'Vừa xong',
              unreadCount: 0,
            }
          : conv
      )
    );
  }, []);

  // Mark conversation as read
  const markAsRead = useCallback((conversationId) => {
    setConversations(prev =>
      prev.map(conv =>
        conv.id === conversationId ? { ...conv, unreadCount: 0 } : conv
      )
    );
  }, []);

  // Get total unread
  const totalUnread = conversations.reduce((sum, conv) => sum + conv.unreadCount, 0);

  return (
    <ChatContext.Provider
      value={{
        conversations,
        messages,
        activeConversationId,
        setActiveConversationId,
        sendMessage,
        markAsRead,
        totalUnread,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}