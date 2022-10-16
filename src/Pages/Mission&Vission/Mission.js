import React from "react";

const Mission = () => {
  return (
    <>
      <div className="mt-5 pt-3 container missionHead">
        <h2 className="text-center mt-3">Mission</h2>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col">
            <div className="row">
              <div className="col-4"></div>
              <div className="col-4">
              <img
              src="https://i.ibb.co/jbxKVBG/mission-image.png"
              alt=""
              srcset=""
              width="100%"
              className="mt-5"
            />
              </div>
              <div className="col-4"></div>
            </div>
          </div>
          <div className="col about mt-3">
            <p className=" mt-4">
              Our mission is achieving effective manufacturing through extensive
              sourcing to the quality of product, strict quality control,
              reasonable price, better value and an effective logistics support
              for on time delivery and to earn our customers highest level of
              satisfaction.<br></br> We are building business network with our
              customers based on trust, integrity and fairness. To facilitate
              and work with the apparel brands by providing high quality
              services as a best solution to them.<br></br> We want to make
              business out of Bangladesh a pleasurable and profitable experience
              and enterprise for all the Buyer, Supplier and Elite. We value our
              relationships with our Buyers and Supplier as a high point of our
              business practices.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 pt-3 container vissionHead">
        <h2 className="text-center mt-3">Vission</h2>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col">
            <p className="vission my-5">
              To become a prominent exporter in the world market through the
              pursuit of hard work and strong
            </p>
          </div>
          <div className="col">
            <div className="row">
              <div className="col-4"></div>
              <div className="col-3">
              <img
              src="https://i.ibb.co/k48TDjz/vision-image.png"
              alt=""
              srcset=""
              width="100%"
              className="mt-3 mx-auto"
            />
              </div>
              <div className="col-3"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
