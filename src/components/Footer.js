import React from 'react';

function Footer(props){

    return(
        <div className="footer">
            <h5 className="footer-title">Located at:</h5>
            <h5 className="footer-title">111 North Broad Street | Griffith, IN 46319 | (219) 924-7500</h5>
            <div className="footer-addresses">
                <span className="footer-link">Volunteer | </span>
                <span className="footer-link">Contact Us | </span>
                <span className="footer-link">Sponsors</span>
            </div>
        </div>
    )
}

export default Footer;