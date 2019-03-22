import React from 'react';
import './footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="parent">
                <div className="footer">
                    <p className="footer-text">&copy; Austin Scholl {(new Date().getFullYear())} | Meaningful Relationships | Meaningful Experiences</p>
                </div>
            </div>
        )
    }
}


export default Footer;