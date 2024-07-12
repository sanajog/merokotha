import React, { Component } from 'react';
import './Motto.css';

class MottoText extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <p className='textHeader'> Our Motto </p>
                <p className='textContent'>Room Finder makes finding your perfect living space effortless. With a user-friendly interface, advanced filters, and real-time updates, your dream room is just a tap away. Say goodbye to house hunting hassles and discover convenience with Room Finder.</p>
            </div>

         );
    }
}
 
export default MottoText;