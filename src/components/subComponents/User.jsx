// This page deals with the view button of Users page for each user. Giving a description and other posts of the specific user.

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DATA_URL } from "../../utils";
import Card from "./CardPosts";
import CardPosts from "./CardPosts";
import Todo from "./Todo";

export default function User() {
  const { userId } = useParams();
  const [author, setAuthor] = useState();
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(`${DATA_URL}/users/${userId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Failed fetching user of id: " + id);
      })
      .then((data) => setAuthor(data));
  }, []);

  // Fetches all posts of this userId
  useEffect(() => {
    if (author) {
      fetch(`${DATA_URL}/posts?userId=${userId}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error(
            "Failed to fetch posts of user with userId: " + userId
          );
        })
        .then((data) => setPosts(data));
    }
  }, [author]);

  // Fetches all todos of this userId
  useEffect(() => {
    if (author) {
      fetch(`${DATA_URL}/todos?userId=${userId}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error(
            "Failed to fetch todos of user with userId: " + userId
          );
        })
        .then((data) => setTodos(data));
    }
  }, [author]);

  return (
    <div className="container">
      {author && (
        <>
          <h1 className="page-title">{author.name}</h1>
          <div className="page-subtitle">{author.email}</div>
          <div>
            <b>Company:</b> {author.company.name}
          </div>
          <div>
            <b>Website:</b> {author.website}
          </div>
          <div>
            <b>Address:</b>{" "}
            {`${author.address.street} ${author.address.suite} ${author.address.city} ${author.address.street}`}
          </div>

          <h3 className="mt-4 mb-2">Posts</h3>
          <div className="card-grid">
            {posts.length > 0 &&
              posts.map((post) => <CardPosts key={post.id} post={post} />)}
          </div>

          <h3 className="mt-4 mb-2">Todos</h3>
          <ul>
            {todos.length > 0 &&
              todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
          </ul>
        </>
      )}
    </div>
  );
}
