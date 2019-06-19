import React from 'react';
import {FaHome} from 'react-icons/fa'

class Header extends React.Component {

    render() {
        return (
            <div style={{minHeight: '10%', maxHeight: '10%', backgroundColor: '#007bff'}}>
                <div>
                    <a href={'/'}>
                        <FaHome/>
                    </a>
                    App-Name
                </div>
            </div>
        );
    }
}

export default Header;


