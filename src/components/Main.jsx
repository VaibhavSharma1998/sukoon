import React from "react";
// import banner from "../Images/banner-img.jpg";
import "./styles.css";
import doctorImg1 from "../Images/doctor-img1.jpeg";
import doctorImg2 from "../Images/doctor-img2.webp";
import doctorImg3 from "../Images/doctor-img3.webp";
import doctorImg4 from "../Images/doctor-img4.webp";
import consultImg1 from "../Images/consult-img1.webp"
import consultImg2 from "../Images/consult-img2.webp"
import consultImg3 from "../Images/consult-img3.svg"
import consultImg4 from "../Images/consult-img4.webp"
import consultImg5 from "../Images/consult-img5.svg"
import consultImg6 from "../Images/consult-img6.webp"

export const Main = () => {
  return (
    <>
      <main>
        {/* banner starts */}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 ">
                <div className="banner-hero-style banner-dimensions">
                  <div className="banner-content">
                    <h3 className="text-white sukoon-text">Sukoon</h3>
                    <p className="text-white quote-text">
                      Find Best doctors in your town at one place
                    </p>
                    <div className="d-flex">
                      <input
                        type="search"
                        name="Search Location"
                        id=""
                        placeholder="Search Location"
                        className="input-search"
                      />
                      <input
                        type="search"
                        name="Search doctors"
                        id=""
                        placeholder="Search doctors ..."
                        className="input-search"
                      />
                      <button type="button" className="search">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* banner ends */}

        {/* doctor card starts */}
        <section className="margin-top-60 ">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6 cursor-pointer">
                <div className="card-main-div">
                  <div class="card" style={{ width: "18rem" }}>
                    <img src={doctorImg1} class="card-img-top img-fluid" alt="..." />
                    
                    <div class="card-body">
                    <h5 class="card-title">Instant Video Consulation</h5>
                      <p class="card-text">
                        Connect within 2 min
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6 cursor-pointer">
                <div className="card-main-div">
                  <div class="card" style={{ width: "18rem" }}>
                    <img src={doctorImg2} class="card-img-top img-fluid" alt="..." />
                    <div class="card-body">
                    <h5 class="card-title">Find Doctors near you</h5>
                      <p class="card-text">
                        Confirmed appointments
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6 cursor-pointer">
                <div className="card-main-div">
                  <div class="card" style={{ width: "18rem" }}>
                    <img src={doctorImg3} class="card-img-top img-fluid" alt="..." />
                    <div class="card-body">
                    <h5 class="card-title">Surgeries</h5>
                      <p class="card-text">
                        Safe and trusted surgery centers
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6 cursor-pointer">
                <div className="card-main-div">
                  <div class="card" style={{ width: "18rem" }}>
                    <img src={doctorImg4} class="card-img-top img-fluid" alt="..." />
                    <div class="card-body">
                    <h5 class="card-title">Treatment</h5>
                      <p class="card-text">
                       Best treatment in your town
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* doctor card ends */}

        {/* consult section  heading starts  */}
        <section className="margin-top-60 ">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="consult-main-div">
                  <div className="consult-div">
                    <p className="consult-p">Consult top doctors online for any health concern</p>
                    <p className="private-p">Private online consultations with verified doctors in all specialists</p>
                  </div>
                  <button className="specialities-btn"> View All Specialities</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* consult section  heading ends  */}

          {/* consult section card starts */}
        <section>
          <div className="container">
            <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="pregency-div">
                  <img src={consultImg1} alt="Periods doubts or Pregnancy" className="consult-img1" />
                  <p className="pregnancy-p">Periods doubts or Pregnancy</p>
                  <p className="now-p">CONSULT NOW</p> 
                </div>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="pregency-div">
                  <img src={consultImg2} alt="Periods doubts or Pregnancy" className="consult-img1" />
                  <p className="pregnancy-p">Periods doubts or Pregnancy</p>
                  <p className="now-p">CONSULT NOW</p> 
                </div>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="pregency-div">
                  <img src={consultImg3} alt="Periods doubts or Pregnancy" className="consult-img1" />
                  <p className="pregnancy-p">Periods doubts or Pregnancy</p>
                  <p className="now-p">CONSULT NOW</p> 
                </div>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="pregency-div">
                  <img src={consultImg4} alt="Periods doubts or Pregnancy" className="consult-img1" />
                  <p className="pregnancy-p">Periods doubts or Pregnancy</p>
                  <p className="now-p">CONSULT NOW</p> 
                </div>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="pregency-div">
                  <img src={consultImg5} alt="Periods doubts or Pregnancy" className="consult-img1" />
                  <p className="pregnancy-p">Periods doubts or Pregnancy</p>
                  <p className="now-p">CONSULT NOW</p> 
                </div>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="pregency-div">
                  <img src={consultImg6} alt="Periods doubts or Pregnancy" className="consult-img1" />
                  <p className="pregnancy-p">Periods doubts or Pregnancy</p>
                  <p className="now-p">CONSULT NOW</p> 
                </div>
            </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
};
