import React, { useState } from 'react';

export default function SignupChef() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    specialty: '',
    experience: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingChefs = JSON.parse(localStorage.getItem('chefData')) || [];
    const updatedChefs = [...existingChefs, formData];
    localStorage.setItem('chefData', JSON.stringify(updatedChefs));

    alert('Inscription réussie!');

    setFormData({
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      address: '',
      password: '',
      specialty: '',
      experience: ''
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
                  <h2>Inscription Chef</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb end */}

      {/* registration section start */}
      <section
        className="contact-section section_padding"
        style={{ backgroundColor: "#f9f8f3" }} // Couleur d'arrière-plan personnalisée
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="contact-title text-center mb-5">S'inscrire en tant que Chef</h2>
            </div>
            <div className="col-lg-8 offset-lg-2">
              <form
                className="form-contact contact_form"
                onSubmit={handleSubmit}
                id="chefRegistrationForm"
                noValidate
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="first_name"
                        id="first_name"
                        type="text"
                        placeholder="Prénom"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="last_name"
                        id="last_name"
                        type="text"
                        placeholder="Nom"
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="phone"
                        id="phone"
                        type="tel"
                        placeholder="Téléphone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="address"
                        id="address"
                        type="text"
                        placeholder="Adresse"
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="password"
                        id="password"
                        type="password"
                        placeholder="Mot de passe"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="specialty"
                        id="specialty"
                        type="text"
                        placeholder="Spécialité"
                        value={formData.specialty}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="experience"
                        id="experience"
                        type="text"
                        placeholder="Expérience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <button type="submit" className="button button-contactForm btn_4 btn-block">
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
