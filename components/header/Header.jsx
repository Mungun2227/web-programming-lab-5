import React, {Component} from 'react';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src="https://i.redd.it/8hkekbti9a221.jpg" alt="hello there"/>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="hidden-msg">
                    <h1>cLiK HeRE</h1>
                </a>
            </div>
        )
    }
}