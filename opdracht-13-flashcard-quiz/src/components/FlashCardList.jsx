import FlashCard from "./FlashCard";

const FlashCardList = ({ cards }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {cards.map((card, index) => (
        <FlashCard key={index} card={card} />
      ))}
    </div>
  );
};

export default FlashCardList;
