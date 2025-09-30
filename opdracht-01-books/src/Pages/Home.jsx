import Header from '../components/Header.jsx';
import BookList from '../components/BookList.jsx';
import Layout from '../components/Layout.jsx';


const Home = () => {
    return (
        <div className="home-bg">
            <Header />
            <h1 className="fancy-home-title">Homepage</h1>
            <Layout>
                <BookList />
            </Layout>
        </div>
    );
};

export default Home;