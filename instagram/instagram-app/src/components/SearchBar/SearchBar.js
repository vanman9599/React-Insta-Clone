import React from 'react';
import Ig_camera from '../../images/ig_camera.PNG';
import Ig_logo from '../../images/ig_instagram.PNG';

function SearchBar(){
    return(
        <div className="search-bar">
            <div className="camera">
                <img src={Ig_camera}  alt="IG"/>
            </div>
            <div className="instagram-logo">
            <img src={Ig_logo}  alt="IG"/>
            </div>
            <div className="input">
                <input type="text" placeholder="Comment"></input>
            </div>
            <div className="social-wrapper">
                <div className="social">
                <i className="fa fa-compass" />
                </div>
                <div className="social">
                <i className="fa fa-heart" />
                </div>
                <div className="social">
                <i className="fa fa-user-circle" />
                </div>
            </div>
        </div>
    )
    
    }     
    
    export default SearchBar;