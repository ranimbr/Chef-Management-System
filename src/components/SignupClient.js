import React, { useState } from 'react';

export default function SignupClient() {
  // États pour chaque champ du formulaire
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    password: '',
  });

  // Gestion des changements dans les champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Récupérer les clients existants depuis le Local Storage
    const existingClients = JSON.parse(localStorage.getItem('clientData')) || [];

    // Ajouter le nouveau client à la liste
    const updatedClients = [...existingClients, formData];

    // Sauvegarder la liste mise à jour dans le Local Storage
    localStorage.setItem('clientData', JSON.stringify(updatedClients));

    alert('Inscription réussie!');

    // Réinitialiser les champs après la soumission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      password: '',
    });
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
                  <h2>Inscription Client</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb end */}

      {/* registration section start */}
      <section className="contact-section section_padding" style={{ backgroundColor: "#f9f8f3" }}>
      
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="contact-title text-center mb-5">S'inscrire en tant que Client</h2>
              <form
                className="form-contact contact_form"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        type="text"
                        placeholder="Prénom"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        type="text"
                        placeholder="Nom"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        type="tel"
                        placeholder="Téléphone"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        type="text"
                        placeholder="Adresse"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        type="password"
                        placeholder="Mot de passe"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3 text-center">
                  <button type="submit" className="button button-contactForm btn_4">
                    S'inscrire
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* registration section end */}
    </div>
  );
}
