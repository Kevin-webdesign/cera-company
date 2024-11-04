import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import contactImage from '../components/cera pictures/contact.jpg';
const About = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <Navbar/>
      <div className="topimg">
        <img src={contactImage} alt="Contact Us" className="header-image" />
        <div className="header-text">
          <h1>About Us</h1>
        </div>
      </div>
      <div className="about-col-2">
        <div className="cef">
          {/* Tab navigation */}
          <p
            className={`tabs ${activeTab === 'experience' ? 'active_tab' : ''}`}
            onClick={() => openTab('experience')}
          >
            Work Experience
          </p>
          <p
            className={`tabs ${activeTab === 'education' ? 'active_tab' : ''}`}
            onClick={() => openTab('education')}
          >
            Education
          </p>
          <p
            className={`tabs ${activeTab === 'skills' ? 'active_tab' : ''}`}
            onClick={() => openTab('skills')}
          >
            Certifications/Achievements/Trainings
          </p>
        </div>

        {/* Tab content */}
        <div className={`contents ${activeTab === 'experience' ? 'active_link' : ''}`} id="experience">
          <div className="row">
            <div className="experience padd-15">
              <div className="timeline-box padd-15">
                <div className="timeline">
                  {/* Timeline item */}
                  <div className="timeline-item">
                    <div className="cicle">
                      <h3 className="timeline-date">
                        <FaCalendarAlt /> 2015 - Present
                      </h3>
                      <h4 className="timeline-title">CERA ENGINEERING SERVICE Ltd.</h4>
                      <h2 className="timeline-text">Founder and Managing Director</h2>
                         <ul>
                        <li>Construction permit application</li>
                        <li>Measuring and mapping land boundaries</li>
                        <li>Prepare comprehensive construction drawings</li>
                          <li>Oversee day-to-day operations on construction sites</li>
                        <li>Prepare accurate cost estimates for construction projects</li>
                        <li>Coordinate with various consultants, including structure engineers</li>
                        <li>Provide on-site supervision and oversight during the construction phase</li>
                      </ul>
                    </div>
                  </div>

                  {/* Timeline item */}
                  <div className="timeline-item">
                    <div className="cicle">
                      <h3 className="timeline-date">
                        <FaCalendarAlt /> 2017 - Present
                      </h3>
                      <h4 className="timeline-title">TRUST PROPERTY CONSULTANCY Ltd.</h4>
                      <h2 className="timeline-text">Real Property Value Assistant And Field Technician</h2>
                      <ul>
                        <li>Conduct research and analysis of local real estate market trends</li>
                        <li>Coordinate with various consultants, including structure engineers</li>
                        <li>Gather relevant data and information on properties under evaluation</li>
                        <li>Assist in the valuation of real properties using established appraisal methods</li>
                      </ul>
                    </div>
                  </div>

                  {/* Timeline item */}
                  <div className="timeline-item">
                    <div className="cicle">
                      <h3 className="timeline-date">
                        <FaCalendarAlt /> 2017 - 2020
                      </h3>
                      <h4 className="timeline-title">PERCE CONSULT Ltd.</h4>
                      <h2 className="timeline-text">Field Technician</h2>
                      <ul>
                        <li>Install, calibrate, and maintain various types of equipment and machinery</li>
                        <li>Conduct site inspections and assessments to evaluate infrastructure, facilities, or systems</li>
                        <li>Maintain accurate records of equipment installations, maintenance activities, and test results</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`contents ${activeTab === 'education' ? 'active_link' : ''}`} id="education">
          <div className="row">
            <div className="educations padd-15">
              <div className="timeline-box padd-15">
                <div className="timeline shadow-dark">
                  {/* Education timeline item */}
                  <div className="timeline-item">
                    <div className="cicle">
                      <h3 className="timeline-date">
                        <FaCalendarAlt /> 2012 - 2015
                      </h3>
                      <h4 className="timeline-title">Advanced Diploma in Civil Engineering</h4>
                      <p className="timeline-text">
                        Integrated Polytechnic Regional Center-Kigali (IPRC-Kigali)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`contents ${activeTab === 'skills' ? 'active_link' : ''}`} id="skills">
          <div className="row">
            <div className="skills padd-15">
              <div className="timeline-box padd-15">
                <div className="timeline shadow-dark">
                  {/* Certifications timeline item */}
                  <div className="timeline-item">
                    <div className="cicle">
                      <h3 className="timeline-date">
                        <FaCalendarAlt /> 2020 - Present
                      </h3>
                      <h4 className="timeline-title">Registered member of IER</h4>
                      <p className="timeline-text">
                        IER Certified Engineering Technologist in Civil Engineering.
                      </p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="cicle">
                      <h3 className="timeline-date">
                        <FaCalendarAlt /> March - June 2024
                      </h3>
                      <h4 className="timeline-title">ProtaSoftware Training</h4>
                      <p className="timeline-text">
                        ProtaStructure Trainee in Reinforced Concrete Design.
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="cicle">
                      <h3 className="timeline-date">
                        <FaCalendarAlt /> January - April 2024
                      </h3>
                      <h4 className="timeline-title">Autodesk Revit Training</h4>
                      <p className="timeline-text">
                        Autodesk Revit Trainee in Architectural Design
                      </p>
                    </div>
                  </div>
                    
                  <div className="timeline-item">
                    <div className="cicle">
                      <h3 className="timeline-date">
                        <FaCalendarAlt />  April 2024
                      </h3>
                      <h4 className="timeline-title">PMI Training</h4>
                      <p className="timeline-text">
                       PMI Trainee in Project Management according to the PMBOK 7th Edition and Agile Practice Guide
                      </p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="cicle">
                      <h3 className="timeline-date">
                        <FaCalendarAlt />  September 2022
                      </h3>
                      <h4 className="timeline-title">Driving License</h4>
                      <p className="timeline-text">
                      Driving License Categories A,B,C,D,EF
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
