import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function DishDetails() {
  const { index } = useParams(); // Récupère l'index du plat depuis l'URL
  const [dish, setDish] = useState(null);

  useEffect(() => {
    const savedDishes = JSON.parse(localStorage.getItem('dishes')) || [];
    const dishToView = savedDishes[index];
    setDish(dishToView);
  }, [index]);

  if (!dish) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      {/* breadcrumb start */}
      <section className="breadcrumb breadcrumb_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb_iner text-center">
                <div className="breadcrumb_iner_item">
                  <h2 className="title-orange">Détails du Plat </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb end */}

      <div className="container">
        <h3 className="details-title">Détails du Plat : {dish.name}</h3>

        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Attribut</th>
              <th scope="col">Valeur</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Description</strong></td>
              <td>{dish.description}</td>
            </tr>
            <tr>
              <td><strong>Prix</strong></td>
              <td>{dish.price}€</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Style intégré */}
      <style jsx>{`
        /* Style global */
        body {
          font-family: 'Arial', sans-serif;
        }

        /* breadcrumb */
        .breadcrumb_iner_item h2 {
          font-size: 30px;
          color: #333;
          font-weight: bold;
        }

        /* Couleur orange pour le titre de plat */
        .title-orange {
          color: #FFA500; /* Couleur orange */
          font-size: 30px;
          font-weight: bold;
        }

        /* Tableau de détails */
        .table {
          width: 100%;
          margin-top: 20px;
          border-collapse: collapse;
        }

        .table th,
        .table td {
          padding: 15px;
          text-align: left;
        }

        .table-bordered {
          border: 1px solid #dee2e6;
        }

        .table-striped tbody tr:nth-of-type(odd) {
          background-color: #f9f9f9;
        }

        .table th {
          background-color: #343a40;
          color: white;
        }

        .table td {
          background-color: #fff;
        }

        .table th,
        .table td {
          vertical-align: middle;
        }

        /* Style pour le titre */
        .details-title {
          color: #FFA500; /* Couleur orange */
          font-size: 30px;
          font-weight: bold;
          margin-top: 30px;
        }

        /* Section container */
        .container {
          margin-top: 40px;
        }

        /* Responsive: Ajustement pour les petits écrans */
        @media (max-width: 768px) {
          .container {
            margin-top: 20px;
          }

          .table th,
          .table td {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
}
