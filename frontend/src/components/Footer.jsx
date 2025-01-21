import React from "react";
import { assets } from "../assets/assets";

/*Remember that footer and navbar are mounted on App.jsx instead of Home.jsx because they must be visible on all pages */

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.new_logo_3} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            saepe earum facere similique provident enim placeat exercitationem,
            ut repellendus alias unde molestias, inventore blanditiis dolor
            illo.
          </p>
        </div>

        <div>
          <p className="text-cl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91-9324905054</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ forever.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
