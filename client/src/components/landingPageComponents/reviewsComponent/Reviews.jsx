import React, { Component } from 'react';
import userPhoto1 from '../../../assets/user1.jpg';
import userPhoto2 from '../../../assets/user2.jpg';
import userPhoto3 from '../../../assets/user3.jpg';
import Review from './Review';
import './Review.css';



// We need to get users from server using a callback function.

const users = [
    {
        userPhoto: userPhoto1,
        userName: 'Nisha Shahi',
        location: 'Pohara | Kathmandu',
        review: 'I moved to Kathmandu from Pokhara, and I can\'t imagine finding the perfect room so easily if it wasn\'t for RoomFinder.'  
    },
    {
        userPhoto: userPhoto3,
        userName: 'Prashant Sharma',
        location: 'Kavre | Bhaktapur',
        review: 'Finding rooms was never this easy! I love this website. Especially being a university student, it helped me a lot.'
    },
    {
        userPhoto: userPhoto2,
        userName: 'Sonim Shrestha',
        location: 'Dharan | Kathmandu',
        review: 'Found my room! These guys are the best! I\'m a working professional, and I move a lot. Thanks RoomFinder. '
    }
]


class Reviews extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='ReviewBox'>
                <Review userInfo={users[0]} />
                <Review userInfo={users[1]} />
                <Review userInfo={users[2]} />
            </div>


         );
    }
}
 
export default Reviews;