import Message from "./Message";

const Messages = () => {
  const DUMMY_MESSAGES = [
    {
      sender: "User name",
      body: "Some message",
      id: "messageId",
    },
  ];

  return (
    <div>
      {DUMMY_MESSAGES.map((message) => (
        <li key={message.id}>
          <Message {...message} />
        </li>
      ))}
    </div>
  );
};

export default Messages;
