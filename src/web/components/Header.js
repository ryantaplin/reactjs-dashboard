import React from 'react';
import {FaHome} from 'react-icons/fa'

export default function Header() {

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
