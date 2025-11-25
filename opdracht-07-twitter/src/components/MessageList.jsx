import Message from "./Message";

const MessageList = ({ name, message }) => {
    return (
        <>
            {message.map((m, i) => (
                <Message key={i} name={name} message={m} />
            ))}
        </>
    );
}

export default MessageList;