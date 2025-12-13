import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UsersList() {
  const [chefs, setChefs] = useState([]);
  const [clients, setClients] = useState([]);
  const navigate = useNavigate(); 

  // Charger les données du Local Storage au chargement de la page
  useEffect(() => {
    const storedChefData = JSON.parse(localStorage.getItem('chefData')) || [];
    const storedClientData = JSON.parse(localStorage.getItem('clientData')) || [];
    setChefs(storedChefData);
    setClients(storedClientData);
  }, []);

  // Fonction de suppression d'un utilisateur (chef ou client)
  const handleDelete = (type, index) => {
    if (type === 'chef') {
      const updatedChefs = [...chefs];
      updatedChefs.splice(index, 1); // Supprimer l'élément à l'index donné
      setChefs(updatedChefs); // Mettre à jour l'état local
      localStorage.setItem('chefData', JSON.stringify(updatedChefs)); // Sauvegarder dans localStorage
    } else {
      const updatedClients = [...clients];
      updatedClients.splice(index, 1); // Supprimer l'élément à l'index donné
      setClients(updatedClients); // Mettre à jour l'état local
      localStorage.setItem('clientData', JSON.stringify(updatedClients)); // Sauvegarder dans localStorage
    }
  };

  // Redirection vers la page de détails
  const handleViewDetails = (user) => {
    navigate('/user-details', { state: { user } });
  };

  return (
    <div className="users_list_and_reservation">
      <section className="users_list section_padding" style={{ backgroundColor: "#f9f8f3" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="section_tittle">
                <h2>Liste des Utilisateurs</h2>
              </div>
            </div>
          </div>

          {/* Liste des Chefs */}
          <h3 className="mt-4">Liste des Chefs</h3>
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Email</th>
                  <th>Téléphone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {chefs.length > 0 ? (
                  chefs.map((chef, index) => (
                    <tr key={index}>
                      <td>{chef.first_name} {chef.last_name}</td>
                      <td>{chef.email}</td>
                      <td>{chef.phone || 'Non renseigné'}</td>
                      <td>
                        <button className="btn_4" onClick={() => handleViewDetails(chef)}>Voir Détails</button>
                        <button className="btn_4 danger" onClick={() => handleDelete('chef', index)}>Supprimer</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan="4">Aucun chef enregistré.</td></tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Liste des Clients */}
          <h3 className="mt-5">Liste des Clients</h3>
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Email</th>
                  <th>Téléphone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {clients.length > 0 ? (
                  clients.map((client, index) => (
                    <tr key={index}>
                      <td>{client.firstName} {client.lastName}</td>
                      <td>{client.email}</td>
                      <td>{client.phone || 'Non renseigné'}</td>
                      <td>
                        <button className="btn_4" onClick={() => handleViewDetails(client)}>Voir Détails</button>
                        <button className="btn_4 danger" onClick={() => handleDelete('client', index)}>Supprimer</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan="4">Aucun client enregistré.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Styles CSS */}
      <style>
        {`
          .users_list_and_reservation {
            padding-top: 50px;
          }

          .section_padding {
            padding: 50px 0;
          }

          .section_tittle p {
            color: #6c757d;
            font-size: 18px;
          }

          .section_tittle h2 {
            font-size: 2.5rem;
            font-weight: 700;
            color: #333;
          }

          table {
            width: 100%;
            margin-top: 20px;
            background: #ffffff;
            border-collapse: collapse;
            border-radius: 8px;
          }

          th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
          }

          th {
            background-color: #f8f9fa;
            font-weight: bold;
          }

          tr:hover {
            background-color: #f1f1f1;
          }

          .btn_4 {
            background-color: #4CAF50;
            color: white;
            padding: 8px 16px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .btn_4:hover {
            background-color: #45a049;
          }

          .btn_4.danger {
            background-color: #f44336;
          }

          .btn_4.danger:hover {
            background-color: #d32f2f;
          }

          .table-responsive {
            margin-top: 20px;
          }

          .mt-3 {
            margin-top: 1rem;
          }

          .mt-4 {
            margin-top: 2rem;
          }

          .mt-5 {
            margin-top: 3rem;
          }
        `}
      </style>
    </div>
  );
}
