import React, { useState } from "react";

import "./styles.css";

export const Banner = () => {
  const [place, setPlace] = useState("");
  const [doctor, setDoctor] = useState("");
  const [suggestedLocation, setSuggestedLocation] = useState([]);

  const locations = [
    "Ambala",
    "Bhiwani",
    "Charkhi Dadri",
    "Faridabad",
    "Fatehabad",
    "Gurugram",
    "Hisar",
    "Jhajjar",
    "Jind",
    "Kaithal",
    "Karnal",
    "Kurukshetra",
    "Mahendragarh",
    "Nuh",
    "Palwal",
    "Panchkula",
    "Panipat",
    "Rewari",
    "Rohtak",
    "Sirsa",
    "Sonipat",
    "Yamunanagar",
  ];

  const handleLocationChange = (event) => {
    const inputValue = event.target.value;
    setPlace(inputValue);

    const locationCheck = locations.filter((location) =>
    location.toLowerCase().includes(inputValue.toLowerCase)
  );
  setSuggestedLocation(locationCheck);
  };

 

  return (
    <div>
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
                  <form onSubmit={(e) => e.preventDefault()} className="d-flex">
                    <input
                      type="search"
                      name="location"
                      value={place}
                      onChange={handleLocationChange}
                      placeholder="Search Location"
                      className="input-search"
                    />
                    <ul className="suggested-ul">
                        <li>
                        {suggestedLocation.map((location, index) => (
                        <li key={index}>{location}</li>
                      ))}
                        </li>
                     
                    </ul>

                    <input
                      type="search"
                      name="doctors"
                      value={doctor}
                      onChange={(e) => setDoctor(e.target.value)}
                      placeholder="Search doctors ..."
                      className="input-search"
                    />
                    <button type="button" className="search">
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner ends */}
    </div>
  );
};
