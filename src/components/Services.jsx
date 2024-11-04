import React from 'react';
import { FaBuilding, FaDraftingCompass, FaClipboardList, FaMapMarkedAlt, FaChartLine, FaHardHat,FaCheckCircle } from 'react-icons/fa';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import contactImage from '../components/cera pictures/contact.jpg';
const Services = () => {
  return (
    <div>
      <Navbar />
      <div className="topimg">
        <img src={contactImage} alt="Contact Us" className="header-image" />
        <div className="header-text">
        <h1 className="subtitle">Our Services</h1>
      </div>
      </div>
      <div className="work">
        <div className="row-1">
          <div className="service">
            <FaBuilding className="service-icon" />
            <h4>
                Construction
              
            </h4>
            <p>building, and maintaining infrastructure like buildings,roads,bridges Etc.</p>
          </div>
        </div>
        <div className="row-1">
          <div className="service">
            <FaDraftingCompass className="service-icon" />
            <h4>
                Architecture
            </h4>
            <p>Creating functional, safe, and aesthetically pleasing building designs.</p>
          </div>
        </div>
        <div className="row-1">
          <div className="service">
            <FaCheckCircle className="service-icon" />
            <h4>
                Construction permit
            </h4>
            <p>Application of construction permit of all kind</p>
          </div>
        </div>
        <div className="row-1">
          <div className="service">
            <FaClipboardList className="service-icon" />
            <h4>
               Quantity Surveying
            </h4>
            <p>Managing all costs related to construction and engineering projects.</p>
          </div>
        </div>
        <div className="row-1">
          <div className="service">
            <FaMapMarkedAlt className="service-icon" />
            <h4>
               Land Surveying
            </h4>
            <p>Measuring and mapping land to establish property boundaries.</p>
          </div>
        </div>
        <div className="row-1">
          <div className="service">
            <FaChartLine className="service-icon" />
            <h4>
               Real Property Valuation
            </h4>
            <p>Estimating the market value of real estate properties.</p>
          </div>
        </div>
        <div className="row-1">
          <div className="service">
            <FaHardHat className="service-icon" />
            <h4>
              Construction Site Supervision
            </h4>
            <p>Overseeing construction activities to ensure project quality and safety.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
