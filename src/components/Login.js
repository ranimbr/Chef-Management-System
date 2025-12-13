import React from 'react';

export default function Login() {
  return (
    <div>
      {/* breadcrumb start */}
      <section className="breadcrumb breadcrumb_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb_iner text-center">
                <div className="breadcrumb_iner_item">
                  <h2>Connexion</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb end */}

      {/* login section start */}
      <section
        className="contact-section section_padding"
        style={{ backgroundColor: "#f9f8f3" }} // Couleur d'arrière-plan personnalisée
      >
        <div className="container">
          <div className="row justify-content-center"> {/* Centrage du formulaire */}
            <div className="col-lg-8 col-md-10"> {/* Augmenté pour élargir le formulaire */}
              <h2 className="contact-title text-center">Se connecter</h2>
              <form
                className="form-contact contact_form"
                action="login_process.php"
                method="post"
                id="loginForm"
                noValidate
              >
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Email"
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
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <button type="submit" className="button button-contactForm btn_4">
                    Se connecter
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* login section end */}

      {/* footer part end */}
    </div>
  );
}
