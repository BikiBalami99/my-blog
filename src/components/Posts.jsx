import React, { useEffect, useState } from "react";
import Card from "./subComponents/Card";

export default function Posts() {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/posts")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok");
      })
      .then((data) => {
        setAllPosts(data);
      });
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="page-title">Posts</h1>
        <div className="card-grid">
          {allPosts.length > 0 &&
            allPosts.map((post) => {
              return <Card key={post.id} post={post} />;
            })}
        </div>
      </div>
    </>
  );
}
