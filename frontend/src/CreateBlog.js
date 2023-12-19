/* /fronted/CreateBlog */

import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch data from the server when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/blogs");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); //this effect runs only once beacuse of an empty array

  return (
    <>
      <header style={{ padding: "0.5rem", marginBottom: "1rem" }}><h1>Blog</h1></header>
      <div style={{ backgroundColor: 'green', padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '1.5rem' }}>
      <form >
        <input type="text" placeholder="Blog Title" />
        <input type="text" placeholder="Author" />
        <input type="text" placeholder="description" />
        <button type="submit">Create Blog</button>
      </form>
      </div>
      {/* Display the fetched blogs */}
      <div>
        <ul style={{ listStyle: 'none', padding: "2rem"}}>
          {blogs.map((blog) => (
            <li
              key={blog.id}
              style={{
                marginBottom: '1rem',
                padding: '1rem',
                backgroundColor: '#319B54',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '5px',
              }}
            >
              <h3>{blog.title}</h3>
              <p>
                Author: {blog.author}
              </p>
              <p>
                Description: {blog.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CreateBlog;
