import React from 'react';
import './logo.css';

class Logo extends React.Component {
    
    constructor(properties){
        super(properties);
        this.logo = <svg xmlnsOsb='http://www.openswatchbook.org/uri/2009/osb' xmlns='http://www.w3.org/2000/svg'
        width='400' height='400' viewBox='0 0 17.462505 19.57917' id='svg2426'>
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
        </svg>;
       
        this.logohtml = this.logo;
    }

    render(){
        return this.logohtml;
    }
}
export default Logo;