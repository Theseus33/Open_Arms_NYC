import React, { Component } from 'react';

class Footer extends Component {



    render() {
        return (
            <footer className="footer container-fluid bg-success row col-sm-12">
                {/* element should be floated left */}
                <h4 className="col-xs-8 col-md-3">© Open Arms -New York</h4>
                {/* float right and links to specific info */}
                <ul className="list-unstyled list-inline col-xs-4 col-md-offset-5">
                    <li>ABOUT</li>
                    <li>|</li>
                    <li>MEET THE TEAM</li>
                    <li>|</li>
                    <li>DONATE</li>
                </ul>    
            </footer>
        )
    }
}

export default Footer;