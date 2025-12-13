import React from 'react';

const Chefs = () => {
  return (
    <section className="chefs_part blog_item_section section_padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="section_tittle">
              <p>Team Member</p>
              <h2>Our Experience Chefs</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Chef 1 */}
          <div className="col-sm-6 col-lg-4">
            <div className="single_blog_item">
              <div className="single_blog_img">
                <img src="img/team/chefs_1.png" alt="Adam Billiard" />
              </div>
              <div className="single_blog_text text-center">
                <h3>Adam Billiard</h3>
                <p>Chef Master</p>
                <div className="social_icon">
                  <a href="#">
                    <i className="ti-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="ti-twitter-alt"></i>
                  </a>
                  <a href="#">
                    <i className="ti-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="ti-skype"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Chef 2 */}
          <div className="col-sm-6 col-lg-4">
            <div className="single_blog_item">
              <div className="single_blog_img">
                <img src="img/team/chefs_2.png" alt="Fred Macyard" />
              </div>
              <div className="single_blog_text text-center">
                <h3>Fred Macyard</h3>
                <p>Chef Master</p>
                <div className="social_icon">
                  <a href="#">
                    <i className="ti-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="ti-twitter-alt"></i>
                  </a>
                  <a href="#">
                    <i className="ti-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="ti-skype"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Chef 3 */}
          <div className="col-sm-6 col-lg-4">
            <div className="single_blog_item">
              <div className="single_blog_img">
                <img src="img/team/chefs_3.png" alt="Justin Stuard" />
              </div>
              <div className="single_blog_text text-center">
                <h3>Justin Stuard</h3>
                <p>Chef Master</p>
                <div className="social_icon">
                  <a href="#">
                    <i className="ti-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="ti-twitter-alt"></i>
                  </a>
                  <a href="#">
                    <i className="ti-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="ti-skype"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Chef 4 (for smaller screens) */}
          <div className="col-sm-6 col-lg-4 d-none d-sm-block d-lg-none">
            <div className="single_blog_item">
              <div className="single_blog_img">
                <img src="img/team/chefs_1.png" alt="Justin Stuard" />
              </div>
              <div className="single_blog_text text-center">
                <h3>Justin Stuard</h3>
                <p>Chef Master</p>
                <div className="social_icon">
                  <a href="#">
                    <i className="ti-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="ti-twitter-alt"></i>
                  </a>
                  <a href="#">
                    <i className="ti-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="ti-skype"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chefs;
