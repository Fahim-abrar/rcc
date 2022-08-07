import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
  return (
    <div>
      <img
        className="header__logo"
        src="https://www.textiletoday.com.bd/wp-content/uploads/2018/12/Forbes-Marshall-solution.jpg"
        alt=""
      ></img>

      <div className="body">
        <div className="Left">
          <p
            style={{
              fontSize: "50px",
              fontFamily: "Calibri",
              fontStyle: "italic",
            }}
          >
            This is the Customer information Database of Fobes Marshall
            Bangladesh. Our target is to help the employees to find information
            quickly and without any hassle.
          </p>
          <Link to="/Login">
            <button className="SignButton">Login</button>
          </Link>
        </div>
        <div className="right">
          <img
            className="LandImage"
            src="https://i0.wp.com/architecture.live/wp-content/uploads/2016/11/Forbes-Marshall-Christopher-Charles-Benninger-Architects-6.jpg?w=262&h=262&crop=1&ssl=1"
            alt=""
          ></img>
        </div>
      </div>
      <div className="bottombar">
        <div>
          <div className="Bparagraph">Engr. Md. Jainal Abedin</div>
          <div className="Bparagraphb">
            Manager - Steam System & Control Instrumentation
          </div>
          <div className="Bparagraphb">
            B.Sc. in EEE(RUET), Certified Energy Auditor
          </div>
          <div className="Bparagraphb">Phone : +880 1701 229 581</div>
          <div className="Bparagraphb">Email : jabedin@forbesmarshall.com</div>
        </div>
        <div className="rightnav">
          <div className="Bparagraph2">Forbes Marshall Pvt. Ltd.</div>
          <div className="Bparagraphb">
            Ahmend Tower (7th Floor, South East Corner)
          </div>
          <div className="Bparagraphb">
            28 & 30,Kamal Atartuk Avenue 
          </div>
          <div className="Bparagraphb">Banani, Dhaka - 1213, Bangladesh</div>
          <div className="Bparagraphb">Phone : +88 01711 529 502</div>
          <div className="Bparagraphb">Email : bangladesh@forbesmarshall.coom </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
