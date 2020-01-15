import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Home = () => {
  return (
    <Router>
      <div className="p-5 mt-5">
        <div className="container">
          <div className="text-left ml-1 mt-5">
            <h1 className="text-light ml-1">
              Asukasportaali - <br></br>Kaikki tietosi samassa paikassa
            </h1>

            <h5 className="text-light ml-1 mt-4">
              Asukasportaalista voit tarkistaa esimerkiksi kirjastolainasi,
              <br></br>
              lääkäriasiointisi ja bussikorttisi voimassaoloajat.
            </h5>
            <Link
              to="/residentportal"
              role="button"
              type="button"
              className="ml-1 mt-5 btn btn-dark active text-uppercase"
              aria-pressed="true"
              aria-label="Nappi"
            >
              Kirjaudu asukasportaaliin
            </Link>
            <div className="p-5 mt-5"></div>
          </div>
        </div>
      </div>
    </Router>
  );
};
export default Home;
