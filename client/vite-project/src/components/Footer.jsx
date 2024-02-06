import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#979797" }}>
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4">
            <h5 className="mb-3 text-dark">StreetBitez</h5>
            <p>
            Explore our mouthwatering menu at See Menu. Indulge in a variety of delicious dishes, crafted with passion and finest ingredients. From savory appetizers to delectable desserts, our menu offers a culinary delight for every palate. Visit See Menu and satisfy your cravings today
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="mb-3 text-dark">Links</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-1">
                <a href="#!" style={{ color: "#4f4f4f" }}>
                  FAQ
                </a>
              </li>
              <li className="mb-1">
                <a href="#!" style={{ color: "#4f4f4f" }}>
                  Classes
                </a>
              </li>
              <li className="mb-1">
                <a href="#!" style={{ color: "#4f4f4f" }}>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#!" style={{ color: "#4f4f4f" }}>
                  Safety
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="mb-1 text-dark">Opening Hours</h5>
            <table className="table" style={{ borderColor: "#666" }}>
              <tbody>
                <tr>
                  <td>Mon - Fri:</td>
                  <td>8am - 9pm</td>
                </tr>
                <tr>
                  <td>Sat - Sun:</td>
                  <td>8am - 1am</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © {new Date().getFullYear()} Copyright:
        <a className="text-dark" href="">
          StreetBitez.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
