import React, { useEffect, useState } from "react";
import { DATA_URL } from "../../utils";
import { useParams } from "react-router-dom";
import Comment from "./Comment";

export default function Post() {
  const [post, setPost] = useState({});
  const [author, setAuthor] = useState();
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${DATA_URL}/posts/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Failed fetching specific post");
      })
      .then((data) => setPost(data));
  }, []);

  useEffect(() => {
    if (post.id) {
      fetch(`${DATA_URL}/users/${post.userId}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Failed fetching user of id: " + post.userId);
        })
        .then((data) => {
          setAuthor(data);
        });
    }
  }, [post]);

  useEffect(() => {
    if (post.id) {
      fetch(`${DATA_URL}/posts/${id}/comments`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Failed fetching comments of postId: " + id);
        })
        .then((data) => {
          setComments(data);
        });
    }
  }, [post]);

  return (
    <>
      {author && (
        <div className="container">
          <h1 className="page-title">{post && post.title}</h1>
          <span className="page-subtitle">
            By: <a href={`/users/${author.id}`}>{author && author.name}</a>
          </span>
          <div>{post.body}</div>
          <h3 className="mt-4 mb-2">Comments</h3>
          <div className="card-stack">
            {comments.length > 0 &&
              comments.map((eachComment) => {
                return <Comment key={eachComment.id} comment={eachComment} />;
              })}
          </div>
        </div>
      )}
    </>
  );
}
