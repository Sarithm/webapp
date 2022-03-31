import React from "react";
import { FaDatabase, FaAsterisk, FaAccusoft } from "react-icons/fa";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="content">
            <div className="col-1">
              <h1>Welcme to</h1>
              <h1>
                <span className="primary-color">Sarithm</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                possimus omnis aliquid? Iste iusto hic suscipit quos eveniet
                ducimus aliquid voluptatem ipsum recusandae blanditiis? Debitis
                facere minus fuga nesciunt totam.
              </p>
              <div className="used-by">
                <p> USED BY</p>
                <div className="icons">
                  <i>
                    <FaDatabase />
                    Staxx
                  </i>
                  <i>
                    <FaAsterisk /> Star AI
                  </i>
                  <i>
                    <FaAccusoft /> Accusoft
                  </i>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="form-layout"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
