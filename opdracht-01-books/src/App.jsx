import './App.css'
import Header from './components/Header.jsx'
import BookList from './components/BookList.jsx'
import Layout from './components/Layout.jsx'

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
