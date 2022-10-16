import React from "react";
import "../Style/Style.css";
const Services = () => {
  return (
    <div className="mt-5 pt-3 container mb-3 ">
      <div className="section-Head">
        <div className="text-center headerWidth"><h2 className=" mt-3">Services</h2></div>
        <div className="">
          <div className="service-wrapper">
            <div className="service col">
              <div className="service1"><i className="fa-solid fa-arrow-right"></i></div>
              <div className="service-media">
                <i className="fa-solid fa-arrow-down"></i>
              </div>
              <h3>Communication</h3>
              <p>
                We continuously communicate with our buyers and urgent repsonse
                their quires.
              </p>
            </div>
            <div className="service col">
              <div className="service2 "><i className="fa-solid fa-arrow-right"></i></div>
              <div className="service-media">
                <i className="fa-solid fa-arrow-down"></i>
              </div>
              <h3>New Products</h3>
              <p>
                Developing new product by following buyers design and basic
                guidelines.
              </p>
            </div>
            <div className="service service3 col">
              <h3>Pricing</h3>
              <p>Do the product price in competitive price.</p>
              <i className="fa-solid fa-arrow-down"></i>
            </div>
            <div className=" service service4 col">
              <h3>Develop sample</h3>
              <p>
                Making development samples/ proto samples/ counter samples and
                pre- production samples as buyers requirements.
              </p>
              <i className="fa-solid fa-arrow-down"></i>
            </div>
            <div className=" service col">
              <div className="service5 ">
                <i className="fa-solid fa-arrow-left"></i>
              </div>

              <div className="service-media">
                <i className="fa-solid fa-arrow-down"></i>
              </div>
              <h3>Fabrics, trims & accessories sourcing</h3>
              <p>
                Having contact with fabric, trims and accessories factory and
                also source these item from local market.
              </p>
            </div>
            <div className="service col">
              <div className=" service6"><i className="fa-solid fa-arrow-left"></i></div>
              <div className="service-media">
                <i className="fa-solid fa-arrow-down"></i>
              </div>
              <h3>Sourcing factories</h3>
              <p>
                We working together in some well-organized factories who are
                committed and can make quality products.
              </p>
            </div>
            <div className="service  col">
              <div className="service7">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
              <div className="service-media">
                <i className="fa-solid fa-arrow-down"></i>
              </div>
              <h3>Merchandising</h3>
              <p>
                Monitoring of the order from fabric procurement stage to
                shipment and reporting the status of the order to the buyers.
              </p>
            </div>
            <div className="service col">
              
              <div className=" service8"><i className="fa-solid fa-arrow-right"></i></div>
              <div className="service-media">
                <i className="fa-solid fa-arrow-down"></i>
              </div>
              <h3>Quality</h3>
              <p>
                We do inline inspections, bulk production indpection, final
                inspections for quality products.
              </p>
            </div>
            <div className="service service9 col">
              <h3>Logistics support</h3>
              <p>
                We can provide logistics support for arrive the products to
                buyers in time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
