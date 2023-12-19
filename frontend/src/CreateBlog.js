/* /fronted/CreateBlog */

import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [comments, setComments] = useState([]);
  //making an object to have data to be used for making new blog
  const [newBlog, setNewBlog] = useState({
    title: "",
    author: "",
    description: "",
  });

  //making an object to have comments created by user
  const [newComment, setNewComment] = useState({
    text: "",
  });

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
  }, []);

  useEffect(() => {
    // Fetch comments from the server when the component mounts
    const fetchComments = async () => {
      try {
        const response = await axios.get("http://localhost:3000/comments");
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments(); // Corrected here
  }, []);

  //when any of the input fields change for new blog this is going to work
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));
  };

  //when any of the input fields change for comments input this is going to work
  const handleCommentInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment((prevComment) => ({
      ...prevComment,
      [name]: value,
    }));
  };

  //Form submit handler
  const handleCreateBlog = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/blogs", newBlog);
      setBlogs((prevBlog) => [...prevBlog, res.data]);

      //clearing the input fields after form submission
      setNewBlog({ title: "", author: "", description: "" });
    } catch (err) {
      console.log("Error creating blog: ", err);
    }
  };

  //function to handle comment submission
 const handleCreateComment = async (blogId) => {
    try {
      const res = await axios.post("http://localhost:3000/comments/", {
        text: newComment.text,
        blogId, // Include the blogId in the request
      });
      setComments((prevComments) => [...prevComments, res.data]);
      setNewComment({ text: "" }); // Clear the input field
    } catch (err) {
      console.log("Error creating comment: ", err);
    }
  };
  
  

  return (
    <>
      <header style={{ padding: "0.5rem", marginBottom: "1rem" }}>
        <h1>Blog</h1>
      </header>
      <div
        style={{
          backgroundColor: "green",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "1.5rem",
        }}
      >
        <form onSubmit={handleCreateBlog}>
          <input
            type="text"
            placeholder="Blog Title"
            name="title"
            value={newBlog.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Author"
            name="author"
            value={newBlog.author}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="description"
            name="description"
            value={newBlog.description}
            onChange={handleInputChange}
          />
          <button type="submit">Create Blog</button>
        </form>
      </div>
      {/* Display the fetched blogs */}
      <div>
        <ul style={{ listStyle: "none", padding: "2rem" }}>
          {blogs.map((blog) => (
            <li
              key={blog.id}
              style={{
                marginBottom: "1rem",
                padding: "1rem",
                backgroundColor: "#319B54",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "5px",
              }}
            >
              <h3>{blog.title}</h3>
              <p>Author: {blog.author}</p>
              <p>Description: {blog.description}</p>

              {/* Add comments part */}
              <div>
                <h4>Add Comments:-</h4>
                <input
  type="text"
  placeholder="Add a comment"
  name="text" // Change the name to match the state property
  value={newComment.text}
  onChange={handleCommentInputChange}
/>


                <button
                  type="submit"
                  onClick={() => handleCreateComment(blog.id)}
                >
                  Post
                </button>
                {comments
                  .filter((comment) => comment.blogId === blog.id)
                  .map((comment) => (
                    <p key={comment.id}>
                      {comment.text}
                      <button>Delete</button>
                    </p>
                  ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CreateBlog;
