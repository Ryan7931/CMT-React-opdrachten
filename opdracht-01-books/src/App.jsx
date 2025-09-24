import './App.css'
import Header from './Header.jsx'
import BookList from './BookList.jsx'
import Layout from './Layout.jsx'

function App() {
  return (
    <>
      <Header />
      <h1>Opdracht 1 - Books</h1>
      <Layout>
        <BookList />
      </Layout>
    </>
  )
}

export default App
