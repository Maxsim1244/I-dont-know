import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import db from "./data/db.json";
const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  useEffect(() => {
    setTimeout(() => {
      setBlogs(db.blogs);
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="home">
      {isLoading && <div>Loading...</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All blogs"
          handleDelete={handleDelete}
        ></BlogList>
      )}
    </div>
  );
};
export default Home;
