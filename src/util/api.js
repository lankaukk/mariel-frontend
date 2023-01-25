// put in other file
import { getPosts } from '../util/api';

function BlogPostsPage() {
    const [error, setError] = useState();
    const [posts, setPosts] = useState();
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      async function loadPosts() {
        setIsLoading(true);
        try {
          const posts = await getPosts();
          setPosts(posts);
        } catch (err) {
          setError(err.message);
        }
        setIsLoading(false);
      }
  
      loadPosts();
    }, []);
  
    return (
      <>
        <h1>Our Blog Posts</h1>
        {isLoading && <p>Loading posts...</p>}
        {error && <p>{error}</p>}
        {!error && posts && <Posts blogPosts={posts} />}
      </>
    );
  }
  
  export default BlogPostsPage;


//this file

export async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw { message: "Failed to fetch posts.", status: 500 };
  }
  return response.json();
}

export async function getPost(id) {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );
  if (!response.ok) {
    throw { message: "Failed to fetch post.", status: 500 };
  }
  return response.json();
}
