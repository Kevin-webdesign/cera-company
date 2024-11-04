import React, { useState } from 'react';
import {FaTimes } from 'react-icons/fa';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import project1 from './cera pictures/GACURIRO PROJECT/DESIGN/CHANTAL-22 EXCUTION 3.jpg';
import project1a from './cera pictures/GACURIRO PROJECT/DESIGN/design2.jpg';
import project1b from './cera pictures/GACURIRO PROJECT/DESIGN/design1.jpg';
import project1c from './cera pictures/GACURIRO PROJECT/DESIGN/design3.jpg';
import project1d from './cera pictures/GACURIRO PROJECT/DESIGN/design4-1.jpg';
import project1e from './cera pictures/GACURIRO PROJECT/DESIGN/design5.jpg';
import project1f from './cera pictures/GACURIRO PROJECT/DESIGN/design6.JPG';
import project1g from './cera pictures/GACURIRO PROJECT/DESIGN/LA BONNE-PETER 2.jpg';
import project1h from './cera pictures/GACURIRO PROJECT/DESIGN/LA BONNE-PETER 7.jpg';
import project1i from './cera pictures/GACURIRO PROJECT/DESIGN/LA BONNE-PETER 8.jpg';
import project1j from './cera pictures/GACURIRO PROJECT/DESIGN/DO-4REV1.jpg';
import project1k from './cera pictures/GACURIRO PROJECT/DESIGN/DO-4REV2.jpg';
import project1l from './cera pictures/GACURIRO PROJECT/DESIGN/DO-4REV4.jpg';
import project1l1 from './cera pictures/GACURIRO PROJECT/DESIGN/DO-4REV6.jpg';
import project1l2 from './cera pictures/GACURIRO PROJECT/DESIGN/DO-4REV9.jpg';
import project1l3 from './cera pictures/GACURIRO PROJECT/DESIGN/MATIAS1.jpg';
import project1l4 from './cera pictures/GACURIRO PROJECT/DESIGN/MATIAS5.jpg';
import project1l5 from './cera pictures/GACURIRO PROJECT/DESIGN/RUGEMA2.jpg';
import project1l6 from './cera pictures/GACURIRO PROJECT/DESIGN/RUGEMA3.jpg';
import project1m from './cera pictures/GACURIRO PROJECT/DESIGN/MA-MOGI1.jpg';
import project1m1 from './cera pictures/GACURIRO PROJECT/DESIGN/MA-MOGI3.jpg';
import project1m2 from './cera pictures/GACURIRO PROJECT/DESIGN/MA-MOGI4.jpg';
import project1m3 from './cera pictures/GACURIRO PROJECT/DESIGN/MA-MOGI6.jpg';
import project1n from './cera pictures/GACURIRO PROJECT/DESIGN/EMMY-FINAL 7.jpg';
import project1n1 from './cera pictures/GACURIRO PROJECT/DESIGN/EMMY-FINAL 9.jpg';
import project1n2 from './cera pictures/GACURIRO PROJECT/DESIGN/EMMY-FINAL 12.jpg';
import project2 from './cera pictures/GACURIRO PROJECT/EXECUTION OF DESIGN/Excution1.jpg';
import project2a from './cera pictures/GACURIRO PROJECT/EXECUTION OF DESIGN/Exction2.jpg';
import project2b from './cera pictures/GACURIRO PROJECT/EXECUTION OF DESIGN/exction3.jpg';
import project2c from './cera pictures/GACURIRO PROJECT/EXECUTION OF DESIGN/exction4.jpg';
import project2d from './cera pictures/GACURIRO PROJECT/EXECUTION OF DESIGN/exction5.jpg';
import project2e from './cera pictures/GACURIRO PROJECT/EXECUTION OF DESIGN/exction6.jpg';
import project2f from './cera pictures/GACURIRO PROJECT/EXECUTION OF DESIGN/labonne.jpg';
import project2g from './cera pictures/GACURIRO PROJECT/EXECUTION OF DESIGN/exction7.jpg';
import project2h from './cera pictures/GACURIRO PROJECT/EXECUTION OF DESIGN/exction8.jpg';
import project2i from './cera pictures/GACURIRO PROJECT/EXECUTION OF DESIGN/exction9.jpg';
import project2j from './cera pictures/GACURIRO PROJECT/EXECUTION OF DESIGN/exction710.jpg';
import project2j1 from './cera pictures/GACURIRO PROJECT/EXECUTION OF DESIGN/onsite1.jpg';
import project2j2 from './cera pictures/GACURIRO PROJECT/EXECUTION OF DESIGN/onsite.jpg';
import project2j3 from './cera pictures/GACURIRO PROJECT/EXECUTION OF DESIGN/onsite2.jpg';
import project2k from './cera pictures/GACURIRO PROJECT/EXECUTION OF DESIGN/b.jpg';
import project2k1 from './cera pictures/GACURIRO PROJECT/EXECUTION OF DESIGN/b1.jpg';
import project2k2 from './cera pictures/GACURIRO PROJECT/EXECUTION OF DESIGN/b2.jpg';
import project2k3 from './cera pictures/GACURIRO PROJECT/EXECUTION OF DESIGN/b3.jpg';
import project2k4 from './cera pictures/GACURIRO PROJECT/EXECUTION OF DESIGN/b4.jpg';
import project2k5 from './cera pictures/GACURIRO PROJECT/EXECUTION OF DESIGN/b5.jpg';
import project2k6 from './cera pictures/GACURIRO PROJECT/EXECUTION OF DESIGN/b6.jpg';
import project2k7 from './cera pictures/GACURIRO PROJECT/EXECUTION OF DESIGN/b7.jpg';
import project2k8 from './cera pictures/GACURIRO PROJECT/EXECUTION OF DESIGN/icyapa1.jpg';
import project2k9 from './cera pictures/GACURIRO PROJECT/EXECUTION OF DESIGN/icyapa2.jpg';
import project2k10 from './cera pictures/GACURIRO PROJECT/EXECUTION OF DESIGN/icyapa3.jpg';
import project2k11 from './cera pictures/GACURIRO PROJECT/EXECUTION OF DESIGN/icyapa.png';
import project2k12 from './cera pictures/GACURIRO PROJECT/EXECUTION OF DESIGN/icyap.png';
import project2k13 from './cera pictures/GACURIRO PROJECT/EXECUTION OF DESIGN//project.jpg';
import project2k14 from './cera pictures/GACURIRO PROJECT/EXECUTION OF DESIGN//project1.jpg';
import project3 from './cera pictures/GACURIRO PROJECT/COMPLETION/complet1.jpg';
import project3a from './cera pictures/GACURIRO PROJECT/COMPLETION/complet2.jpg';
import project3b from './cera pictures/GACURIRO PROJECT/COMPLETION/complet3.jpg';
import './portfolioV2.css';

const PortfolioV2 = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const portfolioItems = [
    {
      title: 'Architecture & Permitting',
      description: '',
      mainImage: project1,
      gallery: [project1, project1a, project1b, project1c ,project1d ,project1e ,project1f,project1g,project1h,project1i
        ,project1j,project1l,project1k,project1l1,project1l2,project1l4,project1l3,project1l5,project1l6,project1m,project1m1,project1m2
        ,project1m3,project1n,project1n1,project1n2]
    },
    {
      title: 'Construction',
      description: '',
      mainImage: project2,
      gallery: [project2b,project2, project2a, project2k6 ,project2k,project2c ,project2k2,project2d,project2k10 ,project2k11,project2e,project2f,project2g,project2h,project2k8 ,project2i,project2j,
        project2j1,project2j2,project2j3,project2k9,project2k1,project2k3,project2k4,project2k5,project2k7 ,project2k12,project2k13,project2k14 ]
    },
    {
      title: 'Custom Buildings Builder',
      description: '',
      mainImage: project3,
      gallery: [project3, project3a, project3b]
    },
  ];

  const handleImageClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div>
      <Navbar />
      <div className="portfolioV2-header">
        <p className="portfolioV2-subtitle">A showcase of my recent works</p>
      </div>
      <div className="portfolioV2-gallery">
        {portfolioItems.map((item, index) => (
          <div key={index} className="portfolioV2-item" onClick={() => handleImageClick(item)}>
            <img src={item.mainImage} alt={item.title} className="portfolioV2-image" />
            <div className="portfolioV2-overlay">
              <div className="portfolioV2-text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for showing gallery */}
      {selectedProject && (
        <div className="portfolioV2-modal">
          <div className="portfolioV2-modal-content">
            <div className="fixed">
            <h2>{selectedProject.title}</h2>
            <span className="portfolioV2-close" onClick={closeModal}><i><FaTimes/></i></span>
            </div>
            <p>{selectedProject.description}</p>
            <div className="portfolioV2-modal-gallery">
              {selectedProject.gallery.map((image, index) => (
                <img key={index} src={image} alt={`Gallery ${index}`} className="portfolioV2-modal-image" loading="lazy"/>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default PortfolioV2;
