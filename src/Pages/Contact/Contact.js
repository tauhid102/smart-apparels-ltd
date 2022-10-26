import React from "react";
import "../Style/Style.css";
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="mt-5 pt-3 container section-Head">
        <div className="text-center headerWidth"><h2 className="mt-3">Contact Us</h2></div>
        <div className="row row-cols-1 row-cols-md-2 mt-2 g-4">
          <div className="col contactHeadLeft">
            <div className="Contact-Color">
              {/* <div className="contact-US">
                <div className="">
                  <i className="fa-solid fa-location-dot p-1"></i>
                </div>
                <div>
                  <h5>Office Permanent Address</h5>
                  <span>
                    Mirpur-11, Block-C, Line-2, House-41, Dhaka-1216, Bangladesh
                  </span>
                </div>
              </div> */}
              {/* <div className="contact-US">
                <div>
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <h5>Mobile/What's App</h5>
                  <span>+88 01863-294433</span>
                </div>
              </div> */}
              {/* <div className="contact-US">
                <div>
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <h5>E-mail</h5>
                  <span>rezamahamud333@gmail.com</span>
                </div>
              </div> */}
              <div className="contact-US">
                <div>
                  <i className="fa-solid fa-person p-2"></i>
                </div>
                <div className="contact-person">
                  <h5>Contact Person</h5>
                  <p>Reza Mahamud</p>
                  <p>Mobile/What’s app:</p>
                  <p>+88 01863-294433</p>
                  <b>Or</b>
                  <p>S.M. Rakibul Islam</p>
                  <p>Mobile/What’s app:</p>
                  <p>+88 01726-193502</p>
                </div>
                <div className="contact-person">
                  
                </div>
              </div>
              <div className="contact-US">
                <div>
                  <i className="fa-solid fa-volleyball"></i>
                </div>
                <div>
                  <h5>Website</h5>
                  <span>https://smartapparelbd.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col contactHeadRight">
            <form className="row g-3">
              <div className="col-12">
                <label for="inputAddress" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Full Name"
                />
              </div>
              <div className="col-12">
                <label for="inputAddress" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Your Email"
                />
              </div>
              <div className="col-12">
                <label for="inputAddress" className="form-label">
                  Massage
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Massage"
                />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
