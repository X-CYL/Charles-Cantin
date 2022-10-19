import React from 'react';
import { Col, Row } from 'antd'
import logofacebook from '../assets/pics/facebook-logo.png'
import logoinstagram from '../assets/pics/instagram-logo.png'

export default function Header() {
    return (
        <div className='container'>
            <div className='header'>
                <Row>
                    <Col xs={6} sm={6} md={8} lg={10} />
                        <img className='logo-size' src= { logofacebook } alt="logo de facebook" />
                        <img className='logo-size' src= { logoinstagram } alt="logo de instagram" />
                    <Col xs={6} sm={6} md={8} lg={10} />
                </Row>
            </div>    
            
        </div>
        
    )

}
