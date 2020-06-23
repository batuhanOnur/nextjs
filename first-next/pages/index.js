import Navbar from '../components/Navbar';
import axios from 'axios';

const Index = ({ posts }) => {

    return (
        <div>
            <Navbar />
            <h1>Our index page</h1>
            <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}

// data fetching on server side
Index.getInitialProps = async () => {

    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const { data } = res;
    return { posts: data };
}

export default Index;