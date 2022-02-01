import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";

const BlogList = ({ blogs, title, handleDelete }) => {
  const [search, setSearch] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const searchMod = search.toLowerCase().trim();
    const newBlogs = blogs.filter(
      (a) =>
        a.title.toLowerCase().trim().includes(searchMod) ||
        a.body.toLowerCase().trim().includes(searchMod) ||
        a.author.toLowerCase().trim().includes(searchMod)
    );
    setFilteredBlogs(newBlogs);
  }, [search]);

  return (
    <div className="blog-list">
      <input
        className="search-input"
        type="text"
        value={search}
        onInput={handleInput}
        placeholder="Search"
      />
      <h2>{title}</h2>
      {filteredBlogs.map((blog) => (
        <div key={blog.id} className="blog-preview">
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
