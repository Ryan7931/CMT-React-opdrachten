import './App.css'
import CreateMessage from './components/CreateMessage'
import MessageList from './components/MessageList'

function App() {
  let name = "john";
  let message = "Hallo ik ben john";
  return (
    <>
      <h1>Opdracht 7 - Twitter</h1>
      <CreateMessage />
      <MessageList name={name} message={message}/>
    </>
  )
}

export default App
