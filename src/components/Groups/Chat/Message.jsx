const Message = (props) => {
  return (
    <div>
      <p>{props.sender}</p>
      <p>{props.body}</p>
    </div>
  );
};

export default Message;
