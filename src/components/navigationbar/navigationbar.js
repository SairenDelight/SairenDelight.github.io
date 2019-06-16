import React from 'react';
import './navigationbar.css';

class NavigationBar extends React.Component {
    
    constructor(properties){
        super(properties);
        this.logo = <svg className="highlight" xmlnsOsb='http://www.openswatchbook.org/uri/2009/osb' xmlns='http://www.w3.org/2000/svg'
        width='50' height='50' viewBox='0 0 17.462505 19.57917' id='svg2426'>
            <defs id='defs2420'>
                <linearGradient id='linearGradient3064' osbPaint='solid'>
                    <stop offset='0' id='stop3062' stopColor='#303025' />
                </linearGradient>
            </defs>
            <g id='layer2' transform='translate(-60.854 -4.9)' fill='#00e568' stroke='#ffcc1d'
            strokeWidth='0'>
                <path d='m 64.293749,8.8687498 3.96875,3.9687492 V 4.8999998 Z' id='path3107'
                />
                <path d='M 74.877084,8.8687478 70.908333,4.8999999 v 7.9374971 z' id='path3107-4'
                />
                <path d='m 60.854166,7.2812497 7.9375,6.6145813 v 10.583335 l -3.96875,-6.614585 v -1.322916 z'
                id='path3136' />
                <path d='m 78.316671,7.2812504 -7.9375,6.6145796 v 10.583337 l 3.96875,-6.614586 v -1.322916 z'
                id='path3136-7' />
            </g>
        </svg>

        this.about_icon = 
        <svg className="highlight"  xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 24 24'>
            <path fill='none' d='M0 0h24v24H0V0z' />
            <path stroke-width="1" d='M10.25 13c0 .69-.56 1.25-1.25 1.25S7.75 13.69 7.75 13s.56-1.25 1.25-1.25 1.25.56 1.25 1.25zM15 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm7 .25c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zM10.66 4.12C12.06 6.44 14.6 8 17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4c-.46 0-.91.05-1.34.12zM4.42 9.47c1.71-.97 3.03-2.55 3.66-4.44C6.37 6 5.05 7.58 4.42 9.47zM20 12c0-.78-.12-1.53-.33-2.24-.7.15-1.42.24-2.17.24-3.13 0-5.92-1.44-7.76-3.69C8.69 8.87 6.6 10.88 4 11.86c.01.04 0 .09 0 .14 0 4.41 3.59 8 8 8s8-3.59 8-8z'
            />
        </svg>;
        this.code_icon = 
            <svg className="highlight" xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 24 24'>
                <path fill='none' d='M0 0h24v24H0V0z' />
                <path  d='M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z'
                />
              </svg>;
        this.contact_icon = 
            <svg className="highlight" xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 24 24'>
                <path fill='none' d='M0 0h24v24H0V0z' />
                <path d='M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z'
                />
            </svg>; 


       
        this.navbarhtml = 
            <div className='navigation-bar vertical-flex-container'>
                <a href="/">{this.logo}</a>
                <div className="icons vertical-flex-container">
                    <a href="about">{this.about_icon}</a>
                    <a href="projects">{this.code_icon}</a>
                    <a href="contact">{this.contact_icon}</a>
                </div>
            </div>;
    }
    
    render(){
        return this.navbarhtml;
    }
}
export default NavigationBar;