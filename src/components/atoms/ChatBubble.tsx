
import React from 'react';
import classNames from 'classnames';
import { ChatPosition } from '@/models/ChatPosition';
import { Color } from '@/models/Color';

interface ChatBubbleProps {
  text? : string;
  position? : ChatPosition;
  color? : Color;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ 
    text = "Hello, How are You ?", position=ChatPosition.START, color = Color.INHERIT
 }) => {
  const chatClass = classNames(
    "chat",
    `chat-${position}`
  );

  const bubbleClass = classNames(
    "chat-bubble",
    `chat-bubble-${color}`
  );

  return (
    <div className={chatClass}>
    <div className={bubbleClass}>
      {text}
    </div>
  </div>
  );
};

export default ChatBubble;
