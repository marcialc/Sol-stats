type BubbleProps = {
  children: React.ReactNode;
};

const Left = ({ children }: BubbleProps) => {
  return (
    <div className="chat chat-start">
      <div className="chat-bubble max-w-full">{children}</div>
    </div>
  );
};

const Right = ({ children }: BubbleProps) => {
  return (
    <div className="chat chat-end">
      <div className="chat-bubble max-w-full">{children}</div>
    </div>
  );
};

const ChatBubble = ({ children }: BubbleProps) => {
  return <div className="chat-bubble max-w-full">{children}</div>;
};

ChatBubble.left = Left;
ChatBubble.right = Right;

export default ChatBubble;
