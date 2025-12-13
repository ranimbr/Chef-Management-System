import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 

export default function DishInfo() {
  const { index } = useParams(); // Récupère l'index du plat depuis l'URL
  const [dish, setDish] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const savedDishes = JSON.parse(localStorage.getItem('dishes')) || [];
    const dishToView = savedDishes[index];
    setDish(dishToView);
  }, [index]);

  // Fonction pour revenir à la liste des plats
  const handleBack = () => {
    navigate('/dish-list'); // Utilisation de navigate au lieu de history.push
  };

  if (!dish) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <section className="contact-section section_padding">
        <div className="container">
          <h2>Détails du Plat</h2>
          <div>
            <h3>{dish.name}</h3>
            <p><strong>Description :</strong> {dish.description}</p>
            <p><strong>Prix :</strong> {dish.price}€</p>
          </div>
          <button onClick={handleBack} className="btn btn-primary">
            Retour à la Liste
          </button>
        </div>
      </section>
    </div>
  );
}
