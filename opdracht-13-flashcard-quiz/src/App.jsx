import FlashCardList from "./components/FlashCardList";
import { flashcards } from "./data/data";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Hoofdsteden Quiz</h1>
      <FlashCardList cards={flashcards} />
    </div>
  );
}

export default App;
