import React from "react";
import { Link } from "react-router-dom";

export default function Card({ post }) {
  const { body, title } = post;
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <div className="card-preview-text">{body}</div>
      </div>
      <div className="card-footer">
        <Link className="btn" to={`${post.id}`}>
          View
        </Link>
      </div>
    </div>
  );
}
