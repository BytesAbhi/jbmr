import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer_container'>
      <div className="handel_footerContent">
      <div className="footer_teams">
        <ul className="footer_lists">
            <h3 className='teams_heading'>Teams</h3>
            <li>Lyca Kovai Kings</li>
            <li>Nellai Royal Kings</li>
            <li>Chepauk Super Gillies</li>
            <li>Dindigul Dragons</li>
            <li>Siechem Madurai Panthers</li>
            <li>Idream Tiruppur Tamizhans</li>
            <li>Trichy Grand Cholas</li>
            <li>SKM Salem Spartans</li>
        </ul>
      </div>
      {/* Latest Updates */}
      <div className="footer_latestUpdates">
        <ul className="latestUpdate_list">
            <h3 className='latestUpdate_heading' >Latest Updates</h3>
            <li>Videos</li>
            <li>Photos</li>
            <li>News</li>
        </ul>
      </div>
      {/* Guidelines */}
      <div className="footer_guidelines">
        <ul className="guidelines_list">
            <h3 className='guidelines_heading' style={{marginBottom:'1rem'}}>Guidelines</h3>
            <li>TNPL Code of Conduct</li>
            <li>Governing Council</li>
            <li> Anti Corruption Policy</li>
        </ul>
      </div>
      {/* Contact */}
      <div className="footer_contact">
        <ul className="contact_list">
            <h3 className='contact_heading' >Contacts</h3>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Term Of Use</li>
        </ul>
      </div>
      </div>
      <div className="footer_copyright">
        <span>Copyright © Sharvin Management Pvt Ltd 2024 All Rights Reserved.
        </span>
      </div>
    </div>
  )
}

export default Footer
