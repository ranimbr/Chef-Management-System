import React, { useState } from 'react';

export default function AddDish() {
  
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');

 
  const handleSaveDish = (e) => {
    e.preventDefault();

   
    if (!name || !description || !price) {
      setError('Tous les champs sont obligatoires');
      return;
    }

    
    const parsedPrice = parseFloat(price);
    if (isNaN(parsedPrice)) {
      setError('Le prix doit être un nombre valide');
      return;
    }

    // Crée un objet plat
    const newDish = {
      name,
      description,
      price: parsedPrice, // Convertit en nombre
    };

    // Récupère la liste des plats existants du LS, ou une liste vide si aucune donnée
    const savedDishes = JSON.parse(localStorage.getItem('dishes')) || [];

    // Ajoute le nouveau plat à la liste
    savedDishes.push(newDish);

    // Sauvegarde la liste mise à jour dans le LocalStorage
    localStorage.setItem('dishes', JSON.stringify(savedDishes));

    // Réinitialise les champs du formulaire
    setName('');
    setDescription('');
    setPrice('');
    setError(''); // Réinitialiser l'erreur

    alert('Plat ajouté avec succès !');
  };

  return (
    <div>
      {/* breadcrumb start */}
      <section className="breadcrumb breadcrumb_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb_iner text-center">
                <div className="breadcrumb_iner_item">
                  <h2>Ajouter un Plat</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb end */}

      {/* Section pour ajouter un plat juste après le header */}
      <section className="contact-section section_padding" style={{ backgroundColor: "#f9f8f3" }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="contact-title text-center mb-5">Ajouter un Plat</h1>
            </div>
            <div className="col-lg-8 offset-lg-2">
              <form
                className="form-contact contact_form"
                onSubmit={handleSaveDish}
                id="dishForm"
                noValidate
              >
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Nom du plat"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="price"
                        id="price"
                        type="number"
                        placeholder="Prix du plat"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="description"
                        id="description"
                        placeholder="Description du plat"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
                {/* Affichage de l'erreur */}
                {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
                <div className="form-group mt-3">
                  <button type="submit" className="button button-contactForm btn_4 btn-block">
                    Ajouter le Plat
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* add dish section end */}
    </div>
  );
}
