import React from "react";

const Home = () => {
  return (
    <>
      HeroBanner
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Bazin for man and women</p>
      </div>
      <div className="products-container">
        {["Product 1", "product 2"].map((product) => product)}
      </div>
      Footer
    </>
  );
};

export default Home;
