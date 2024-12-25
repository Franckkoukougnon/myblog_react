import React, { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import "./UserDetail.css";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserDetails = useCallback(async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await response.json();
      setUser(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchUserDetails();
  }, [fetchUserDetails]);

  if (loading) return <p>Chargement des détails...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
    <div className="user-details-container">
      <h2>{user.name}</h2>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Website:</strong>{" "}
        <a href={`http://${user.website}`} target="_blank" rel="noreferrer">
          {user.website}
        </a>
      </p>
      <p>
        <strong>Address:</strong>{" "}
        {`${user.address.street}, ${user.address.city}`}
      </p>
      <p>
        <strong>Company:</strong> {user.company.name}
      </p>
      <Link to="/" className="back-link">
        Retour à la liste
      </Link>
    </div>
  );
};

export default UserDetails;
