import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./UserList.css";

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUserList(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="user-list-container">
      {loading && <p className="loading">Chargement en cours...</p>}
      {error && (
        <p className="error">Une erreur est survenue: {error.message}</p>
      )}
      <ul className="user-list">
        {userList.map((user) => (
          <li key={user.id} className="user-item">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            {/* Lien vers la page de détails */}
            <Link to={`/user/${user.id}`} className="details-link">
              Voir plus
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
