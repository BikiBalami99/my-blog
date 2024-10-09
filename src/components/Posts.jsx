import React, { useEffect, useState } from "react";
import CardPosts from "./subComponents/CardPosts";
import { DATA_URL } from "../utils";

export default function Posts() {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    fetch(`${DATA_URL}/posts`)
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
              return <CardPosts key={post.id} post={post} />;
            })}
        </div>
      </div>
    </>
  );
}
