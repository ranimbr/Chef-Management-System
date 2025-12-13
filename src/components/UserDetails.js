import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function UserDetails() {
  const { state } = useLocation(); // Récupère l'état de la navigation
  const [user, setUser] = useState(null); // Initialisation de l'utilisateur
  const [isModalOpen, setIsModalOpen] = useState(false); // Etat du modal
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address: '',
    role: ''
  });

  // Si un utilisateur est passé par la navigation, on le charge
  useEffect(() => {
    if (state && state.user) {
      setUser(state.user); // Charger l'utilisateur à partir de l'état
      setFormData(state.user); // Préremplir les champs avec les données actuelles
    }
  }, [state]);

  // Fonction pour ouvrir et fermer le modal
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Fonction pour gérer les changements dans le formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Fonction pour sauvegarder les modifications dans le localStorage
  const handleSaveChanges = () => {
    const updatedUser = { ...formData }; // Créer une copie des données du formulaire
    setUser(updatedUser); // Mettre à jour l'état avec les nouvelles informations

    // Sauvegarder les données modifiées dans le localStorage
    localStorage.setItem('user', JSON.stringify(updatedUser));

    // Fermer le modal après enregistrement
    toggleModal();
  };

  return (
    <div>
      {/* Section Breadcrumb (Détails Utilisateur) */}
      <section className="breadcrumb breadcrumb_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb_iner text-center">
                <div className="breadcrumb_iner_item">
                  <h2>Détails de l'utilisateur</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Détails Utilisateur */}
      <section className="user_details section_padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="section_tittle">
                <h2>Détails de l'utilisateur</h2>
              </div>
            </div>
          </div>

          {/* Vérifie si les données utilisateur existent */}
          {user ? (
            <div className="user_info">
              <h3>{user.first_name} {user.last_name}</h3>
              <p><strong>Email: </strong>{user.email}</p>
              <p><strong>Téléphone: </strong>{user.phone || 'Non renseigné'}</p>

              {/* Autres informations de l'utilisateur */}
              <div className="user_additional_info">
                <h4>Informations Complémentaires</h4>
                <p><strong>Adresse: </strong>{user.address || 'Non renseignée'}</p>
                <p><strong>Poste: </strong>{user.role || 'Non renseigné'}</p>
              </div>

              <div className="user_actions">
                <button className="btn_4" onClick={toggleModal}>Modifier</button>
                
              </div>
            </div>
          ) : (
            <p>Chargement des informations de l'utilisateur...</p>
          )}
        </div>
      </section>

      {/* Modal de Modification */}
      {isModalOpen && (
        <div className="modal_overlay">
          <div className="modal_container">
            <div className="modal_header">
              <h3>Modifier l'utilisateur</h3>
              <button className="close_btn" onClick={toggleModal}>X</button>
            </div>
            <div className="modal_body">
              <label>
                Nom:
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Prénom:
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Téléphone:
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone || ''}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Adresse:
                <input
                  type="text"
                  name="address"
                  value={formData.address || ''}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Poste:
                <input
                  type="text"
                  name="role"
                  value={formData.role || ''}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="modal_footer">
              <button className="btn_4" onClick={handleSaveChanges}>Enregistrer</button>
              <button className="btn_4 danger" onClick={toggleModal}>Annuler</button>
            </div>
          </div>
        </div>
      )}

      {/* Styles CSS */}
      <style>
        {`
          .user_details_and_reservation {
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

          /* Section Breadcrumb */
          .breadcrumb {
            background-color: #f8f9fa;
            padding: 20px 0;
            margin-bottom: 30px;
          }

          .breadcrumb_iner {
            text-align: center;
          }

          .breadcrumb_iner_item h2 {
            font-size: 2rem;
            font-weight: 700;
            color: #333;
          }

          .user_info {
            background: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }

          .user_info h3 {
            font-size: 2rem;
            font-weight: 600;
            color: #333;
          }

          .user_info p {
            font-size: 1.1rem;
            color: #555;
          }

          .user_additional_info h4 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-top: 20px;
            color: #333;
          }

          .user_additional_info p {
            font-size: 1rem;
            color: #777;
          }

          .user_actions {
            margin-top: 20px;
          }

          .btn_4 {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            margin-right: 15px;
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

          /* Styles du Modal */
          .modal_overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
          }

          .modal_container {
            background: white;
            border-radius: 8px;
            width: 500px;
            padding: 20px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            animation: fadeIn 0.3s ease-in-out;
          }

          .modal_header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
          }

          .modal_header h3 {
            font-size: 1.8rem;
            font-weight: 600;
            color: #333;
          }

          .close_btn {
            font-size: 1.5rem;
            background: none;
            border: none;
            cursor: pointer;
            color: #555;
          }

          .modal_body label {
            display: block;
            margin-bottom: 15px;
            font-size: 1.1rem;
            color: #555;
          }

          .modal_body input {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 6px;
            font-size: 1rem;
          }

          .modal_footer {
            margin-top: 20px;
            text-align: right;
          }

          /* Animation du Modal */
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: scale(0.9);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
}
