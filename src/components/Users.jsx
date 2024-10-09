import React, { useEffect, useState } from "react";
import CardUsers from "./subComponents/CardUsers";
import { DATA_URL } from "../utils";

export default function Users() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch(`${DATA_URL}/users`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Response was not ok while fetching Users.");
        }
      })
      .then((data) => setAllUsers(data));
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="page-title">Users</h1>
        <div className="card-grid">
          {allUsers.length &&
            allUsers.map((user) => {
              return <CardUsers key={user.id} user={user} />;
            })}
        </div>
      </div>
    </>
  );
}
