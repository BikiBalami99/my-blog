import React from "react";
import { Link } from "react-router-dom";

export default function CardUsers({ user }) {
  const { name, email, company, website } = user;

  return (
    <div className="card">
      <div className="card-header">{name}</div>
      <div className="card-body">
        <div className="card-preview-text">
          <div>{company.name}</div>
          <div>{website}</div>
          <div>{email}</div>
        </div>
      </div>
      <div className="card-footer">
        <Link className="btn" to={`${user.id}`}>
          View
        </Link>
      </div>
    </div>
  );
}
