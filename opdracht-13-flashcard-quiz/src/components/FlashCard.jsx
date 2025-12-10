import { useState } from "react";

const FlashCard = ({ card }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="bg-blue-500 text-white p-6 m-4 rounded-lg shadow-lg cursor-pointer w-64 h-40 flex items-center justify-center text-center transition-transform duration-500 transform hover:scale-105"
    >
      {flipped ? card.answer : card.question}
    </div>
  );
};

export default FlashCard;
