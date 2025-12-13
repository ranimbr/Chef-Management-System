import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function DishList() {
  const [dishes, setDishes] = useState([]);
  const [showModal, setShowModal] = useState(false);  
  const [dishToEdit, setDishToEdit] = useState(null); 
  const [newDishData, setNewDishData] = useState({ name: '', description: '', price: '' }); 

  // Chargement des plats à partir de localStorage
  useEffect(() => {
    const savedDishes = JSON.parse(localStorage.getItem('dishes')) || [];
    setDishes(savedDishes);
    console.log('Dishes loaded from localStorage:', savedDishes);
  }, []); 

  const handleDelete = (index) => {
    const savedDishes = JSON.parse(localStorage.getItem('dishes')) || [];
    savedDishes.splice(index, 1); 
    localStorage.setItem('dishes', JSON.stringify(savedDishes)); 
    setDishes(savedDishes); 
  };

  const handleEdit = (index) => {
    const dish = dishes[index];
    setDishToEdit(index); // Sauvegarder l'index du plat à modifier
    setNewDishData({ name: dish.name, description: dish.description, price: dish.price }); // Précharger les données
    setShowModal(true); // Afficher le modal
  };

  const handleSaveChanges = () => {
    const updatedDishes = [...dishes];
    updatedDishes[dishToEdit] = newDishData; 
    localStorage.setItem('dishes', JSON.stringify(updatedDishes)); 
    setDishes(updatedDishes); 
    setShowModal(false); 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDishData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <section className="breadcrumb breadcrumb_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb_iner text-center">
                <div className="breadcrumb_iner_item">
                  <h2>Liste des Plats</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section section_padding" style={{ backgroundColor: "#f9f8f3" }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="contact-title">Liste des Plats</h2>
            </div>

            <div className="col-12">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Nom du plat</th>
                    <th scope="col">Description</th>
                    <th scope="col">Prix</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {dishes.map((dish, index) => (
                    <tr key={index}>
                      <td>{dish.name}</td>
                      <td>{dish.description}</td>
                      <td>{dish.price}€</td>
                      <td>
                        <Link to={`/dish/${index}`} className="btn btn-info btn-sm m-1">
                          Voir
                        </Link>
                        <button onClick={() => handleEdit(index)} className="btn btn-warning btn-sm m-1">
                          Modifier
                        </button>
                        <button onClick={() => handleDelete(index)} className="btn btn-danger btn-sm m-1">
                          Supprimer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de modification avec animation */}
      {showModal && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog" aria-labelledby="editDishModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editDishModalLabel">Modifier le Plat</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="dishName">Nom du Plat</label>
                    <input
                      type="text"
                      className="form-control"
                      id="dishName"
                      name="name"
                      value={newDishData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="dishDescription">Description</label>
                    <textarea
                      className="form-control"
                      id="dishDescription"
                      name="description"
                      rows="3"
                      value={newDishData.description}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="dishPrice">Prix</label>
                    <input
                      type="number"
                      className="form-control"
                      id="dishPrice"
                      name="price"
                      value={newDishData.price}
                      onChange={handleInputChange}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Fermer</button>
                <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>Enregistrer les changements</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Styles CSS */}
      <style>
        {`
          .modal.fade .modal-dialog {
            transform: scale(0.7);
            opacity: 0;
            transition: opacity 0.3s ease, transform 0.3s ease;
          }

          .modal.fade.show .modal-dialog {
            transform: scale(1);
            opacity: 1;
          }

          .modal-content {
            border-radius: 15px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            background-color: #fff;
          }

          .modal-header {
            background-color: #f0ad4e;
            color: white;
            border-radius: 15px 15px 0 0;
            padding: 20px;
          }

          .modal-header .close {
            color: white;
            font-size: 1.5rem;
            opacity: 1;
            transition: opacity 0.3s ease;
          }

          .modal-header .close:hover {
            opacity: 0.7;
          }

          .modal-body {
            padding: 20px;
            font-size: 1rem;
          }

          .modal-footer {
            background-color: #f9f9f9;
            border-top: 1px solid #ddd;
            padding: 10px 20px;
            display: flex;
            justify-content: flex-end;
          }

          .modal-footer button {
            padding: 10px 20px;
            border-radius: 5px;
            font-size: 1rem;
          }

          .modal-footer .btn-secondary {
            background-color: #6c757d;
          }

          .modal-footer .btn-primary {
            background-color: #28a745;
            border-color: #28a745;
          }

          .modal-footer .btn-secondary:hover {
            background-color: #5a6268;
          }

          .modal-footer .btn-primary:hover {
            background-color: #218838;
          }
        `}
      </style>
    </div>
  );
}
