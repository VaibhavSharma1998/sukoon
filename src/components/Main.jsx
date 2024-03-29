import React, { useState } from "react";
// import banner from "../Images/banner-img.jpg";
import "./styles.css";
import doctorImg1 from "../Images/doctor-img1.jpeg";
import doctorImg2 from "../Images/doctor-img2.webp";
import doctorImg3 from "../Images/doctor-img3.webp";
import doctorImg4 from "../Images/doctor-img4.webp";
import consultImg1 from "../Images/consult-img1.webp";
import consultImg2 from "../Images/consult-img2.webp";
import consultImg3 from "../Images/consult-img3.svg";
import consultImg4 from "../Images/consult-img4.webp";
import consultImg5 from "../Images/consult-img5.svg";
import consultImg6 from "../Images/consult-img6.webp";
import dentist from "../Images/dentist.jpeg";
import gynecologist from "../Images/gynecologist.jpeg";
import dietitian from "../Images/dietitian.jpeg";
import physiotherapist from "../Images/physiotherapist.jpeg";
import surgeon from "../Images/surgeon.jpeg";
import orthopedist from "../Images/orthopedist.jpeg";
import physician from "../Images/physician.jpeg";
import pediatrician from "../Images/pediatrician.jpeg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// For doctor slider

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

export const Main = () => {
  


  return (
    <>
      <main>
        

        {/* doctor card starts */}
        <section className="margin-top-60 ">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6 cursor-pointer">
                <div className="card-main-div">
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src={doctorImg1}
                      className="card-img-top img-fluid"
                      alt="..."
                    />

                    <div className="card-body">
                      <h5 className="card-title">Instant Video Consulation</h5>
                      <p className="card-text">Connect within 2 min</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6 cursor-pointer">
                <div className="card-main-div">
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src={doctorImg2}
                      className="card-img-top img-fluid"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Find Doctors near you</h5>
                      <p className="card-text">Confirmed appointments</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6 cursor-pointer">
                <div className="card-main-div">
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src={doctorImg3}
                      className="card-img-top img-fluid"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Surgeries</h5>
                      <p className="card-text">Safe and trusted surgery centers</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6 cursor-pointer">
                <div className="card-main-div">
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src={doctorImg4}
                      className="card-img-top img-fluid"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Treatment</h5>
                      <p className="card-text">Best treatment in your town</p>
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
                    <p className="consult-p">
                      Consult top doctors online for any health concern
                    </p>
                    <p className="private-p">
                      Private online consultations with verified doctors in all
                      specialists
                    </p>
                  </div>
                  <button className="specialities-btn">
                    {" "}
                    View All Specialities
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* consult section  heading ends  */}

        {/* consult section card starts */}
        <section className="margin-top-20">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-4 col-sm-6 cursor-pointer">
                <div className="pregency-div">
                  <img
                    src={consultImg1}
                    alt="Periods doubts or Pregnancy"
                    className="consult-img1"
                  />
                  <p className="pregnancy-p">Periods doubts or Pregnancy</p>
                  <p className="now-p">CONSULT NOW</p>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-6 cursor-pointer">
                <div className="pregency-div">
                  <img
                    src={consultImg2}
                    alt="Periods doubts or Pregnancy"
                    className="consult-img1"
                  />
                  <p className="pregnancy-p">Periods doubts or Pregnancy</p>
                  <p className="now-p">CONSULT NOW</p>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-6 cursor-pointer">
                <div className="pregency-div">
                  <img
                    src={consultImg3}
                    alt="Periods doubts or Pregnancy"
                    className="consult-img1"
                  />
                  <p className="pregnancy-p">Periods doubts or Pregnancy</p>
                  <p className="now-p">CONSULT NOW</p>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-6 cursor-pointer">
                <div className="pregency-div">
                  <img
                    src={consultImg4}
                    alt="Periods doubts or Pregnancy"
                    className="consult-img1"
                  />
                  <p className="pregnancy-p">Periods doubts or Pregnancy</p>
                  <p className="now-p">CONSULT NOW</p>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-6 cursor-pointer">
                <div className="pregency-div">
                  <img
                    src={consultImg5}
                    alt="Periods doubts or Pregnancy"
                    className="consult-img1"
                  />
                  <p className="pregnancy-p">Periods doubts or Pregnancy</p>
                  <p className="now-p">CONSULT NOW</p>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-6 cursor-pointer">
                <div className="pregency-div">
                  <img
                    src={consultImg6}
                    alt="Periods doubts or Pregnancy"
                    className="consult-img1"
                  />
                  <p className="pregnancy-p">Periods doubts or Pregnancy</p>
                  <p className="now-p">CONSULT NOW</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* consult section card ends */}

        {/* appointment  section  heading starts*/}
        <section className="margin-top-60">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="consult-div">
                  <p className="consult-p">
                    Book an appointment for an in-clinic consultation
                  </p>
                  <p className="find-p">
                    Find experienced doctors across all specialties
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* appointment  section  heading ends*/}

        {/* appointment card starts */}
        <section className="margin-top-20 ">
          <div className="container">
            <Carousel responsive={responsive}>
              <div className="card-main-div cursor-pointer">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={dentist} className="card-img-top img-fluid" alt="..." />

                  <div className="card-body">
                    <h6 className="denist-text">Dentist</h6>
                    <p className="teeth-text">Teething troubles? </p>
                  </div>
                </div>
              </div>

              <div className="card-main-div cursor-pointer">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={gynecologist}
                    className="card-img-top img-fluid"
                    alt="..."
                  />

                  <div className="card-body">
                    <h6 className="denist-text">Gynecologist</h6>
                    <p className="teeth-text">Connect within 2 min</p>
                  </div>
                </div>
              </div>

              <div className="card-main-div cursor-pointer">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={dietitian}
                    className="card-img-top img-fluid"
                    alt="..."
                  />

                  <div className="card-body">
                    <h6 className="denist-text">Dietitian</h6>
                    <p className="teeth-text">Connect within 2 min</p>
                  </div>
                </div>
              </div>

              <div className="card-main-div cursor-pointer">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={physician}
                    className="card-img-top img-fluid"
                    alt="..."
                  />

                  <div className="card-body">
                    <h6 className="denist-text">Physician</h6>
                    <p className="teeth-text">Connect within 2 min</p>
                  </div>
                </div>
              </div>

              <div className="card-main-div cursor-pointer">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={surgeon} className="card-img-top img-fluid" alt="..." />

                  <div className="card-body">
                    <h6 className="denist-text">Surgeon</h6>
                    <p className="teeth-text">Connect within 2 min</p>
                  </div>
                </div>
              </div>

              <div className="card-main-div cursor-pointer">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={orthopedist}
                    className="card-img-top img-fluid"
                    alt="..."
                  />

                  <div className="card-body">
                    <h6 className="denist-text">Orthopedist</h6>
                    <p className="teeth-text">Connect within 2 min</p>
                  </div>
                </div>
              </div>

              <div className="card-main-div cursor-pointer">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={physiotherapist}
                    className="card-img-top img-fluid"
                    alt="..."
                  />

                  <div className="card-body">
                    <h6 className="denist-text">Physiotherapist</h6>
                    <p className="teeth-text">Connect within 2 min</p>
                  </div>
                </div>
              </div>

              <div className="card-main-di cursor-pointer">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={pediatrician}
                    className="card-img-top img-fluid"
                    alt="..."
                  />

                  <div className="card-body">
                    <h6 className="denist-text">pediatrician</h6>
                    <p className="teeth-text">Connect within 2 min</p>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </section>

        {/* appointment card ends */}

        {/* user swiper starts */}

        <section className="margin-top-60">
          <h3 className="user-text">What our users have to say</h3>
          <div className="container">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="user-testimonial">
                  <p className="user-review">
                    Very helpful. Far easier than doing same things on computer.
                    Allows quick and easy search with speedy booking. Even
                    maintains history of doctors visited.
                  </p>
                  <p className="user-name">Vaibhav Sharma</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="user-testimonial">
                  <p className="user-review">
                    Very good app. Well thought out about
                    booking/rescheduling/canceling an appointment. Also,
                    Doctor's feedback mechanism is good and describes all the
                    basics in a good way.
                  </p>
                  <p className="user-name">Vikram</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="user-testimonial">
                  <p className="user-review">
                    Very easy to book,maintain history. Hassle free from older
                    versions of booking appointment via telephone.. Thanks
                    Practo for making it simple.
                  </p>
                  <p className="user-name">Rahul</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </main>
    </>
  );
};
