import React, { Component } from 'react'
import listIcon from '../../../assets/list-icon.png'
import mapIcon from '../../../assets/map-icon.png'
import './Filter.css'


export class Filter extends Component {
    render() {
        const { view, changeView, isLoggedIn, location, preference, price, changeHandler } = this.props
        // redirect user to login before making a post
        const makePostButtonUrl = isLoggedIn ? '/makepost' : 'login'
        return (
            <div>
                <div id='topHeading'>
                    <h2 className='roomHeading'>Find your perfect room</h2>
                    <a href={makePostButtonUrl}>
                        <button className='postButton'>Make a Post</button>
                    </a>
                </div>
                <table className='filter'>
                    <tbody>
                    <tr>
                        <td className='filterItem'>
                            <select name="location" value={location} id="location" className='select select1' onChange={ changeHandler }>
                                <option value="">Location</option>
                                <option value="Maitidevi">Maitidevi</option>
                                <option value="New Baneshwor">New Baneshwor</option>
                                <option value="Mid Baneshwor">Mid Baneshwor</option>
                                <option value="Dillibazar">Dillibazar</option>
                                <option value="Maitighar">Maitighar</option>
                                <option value="Shantinagar">Shantinagar</option>
                                <option value="Old Baneshwor">Old Baneshwor</option>
                                <option value="More..">More..</option>
                            </select>
                        </td>
                        <td className='filterItem'>
                            <select name="preference" value={preference} id="preference" className='select select3' onChange={ changeHandler }>
                                <option value="">Preference</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Student">Student</option>
                                <option value="Professional">Professional</option>
                                <option value="Elderly">Elderly</option>
                                <option value="No Smoking">No Smoking</option>
                                <option value="No Drinking">No Drinking</option>
                                <option value="No Partying">No Partying</option>
                                <option value="No Pets">No Pets</option>
                                <option value="420 Friendly">420 Friendly</option>
                            </select>
                        </td>
                        <td className='filterItem'>
                            <select name="price" value={price} id="price" className='select select4' onChange={ changeHandler }>
                                <option value="">Price</option>
                                <option value="Rs.5000-Rs.7000">Rs.5000-Rs.7000</option>
                                <option value="Rs.8000-Rs.9000">Rs.8000-Rs.9000</option>
                                <option value="Rs.10000-Rs.13000">Rs.10000-Rs.13000</option>
                                <option value="Rs.14000-Rs.16000">Rs.14000-Rs.16000</option>
                                <option value="Rs.17000-Rs.19000">Rs.17000-Rs.19000</option>
                                <option value="Rs.20000-Rs.22000">Rs.20000-Rs.22000</option>
                                <option value="Rs.23000-Rs.25000">Rs.23000-Rs.25000</option>
                                <option value="Rs.25000+">Rs.25000+</option>
                            </select>
                        </td>
                        <td className='filterItem viewIconContainer'>
                            {view==='list' ? 
                                <input type="image" src={mapIcon} onClick={()=>changeView()} id='viewIcon' alt='Map View' /> :
                                <input type="image" src={listIcon} onClick={()=>changeView()} id='viewIcon' alt='List View'/>
                            }
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Filter
