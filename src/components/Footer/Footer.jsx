import React from "react";
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Store</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            maiores explicabo nulla adipisci deserunt, saepe, facilis dolorem
            vel consequatur pariatur nesciunt doloribus. Dolorum, perspiciatis
            necessitatibus eveniet omnis ipsa dicta quae.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
            quibusdam fuga eius iste officia esse est cum, impedit fugit ad vel
            voluptas sit consectetur dolorem! Perferendis, eos alias? Blanditiis
            nemo asperiores eum. Voluptatem, maiores necessitatibus.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">D-STORE</span>
          <span className="copyrght">&copy; Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
