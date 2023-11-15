import React from 'react'
import './User.css'
import React, { useState, useEffect } from 'react';

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // obtenir la liste des utilisateurs par le lien /api/users
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  
  return (
    <div>
      <h2>Liste des utilisateurs</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.nom} {user.prenom} - {user.age} ans
          </li>
        ))}
      </ul>
    </div>
  );
}

export default User
