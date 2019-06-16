import React from 'react';
import './home.css';

class Home extends React.Component {
    
    constructor(properties){
        super(properties);
       
        this.homehtml = 
            <div className='home-container'>
                <h1 id="intro-text">Hi!<br></br><em>I'm Vivian.</em></h1>
                <p className="caption-color font-24"><em className="hover-fx">Learner</em> / <em className="hover-fx">Developer</em> / <em className="hover-fx">Cybersec</em></p>
            </div>;
    }

    render(){
        return this.homehtml;
    }
}
export default Home;