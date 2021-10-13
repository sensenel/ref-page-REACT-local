import React from 'react';
import profil from '../assets/ch-gabler.png';
//import Counter from './counter'


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
                skills: [ // array-> object basierend
                    {key: 'html(5)', value:  '91'},
                    {key: 'CSS(3)', value:  '94'},
                    {key: 'JavaScript', value: '82'},
                    {key:'PHP', value: '71'},
                    {key: 'mySQL', value: '55'}
                ],
                skillsBottom: { // object-> object basierend / wie in php Version
                    "Frameworks": {'React': '67', 'GSAP': '86', 'jQuery': '79', 'BootStrap': '66', "Node.js": '28' },
                    "CMS-Systeme": {'Joomla': '89', 'WordPress': '33', 'SilverStripe': '40'},
                    "Versionierung": {'GitHub': '73', 'BitBucket': '55'}
                },
                skillCounter: 1
        };
        //this.skillsArray = this.skillsArray.bind(this);
        //this.skillsBottomArray = this.skillsBottomArray.bind(this);
    }
    
    skillsArray() { // array-> object basierend
        return this.state.skills.map((el, i) => {
            return (
                <div key={i} className="skill-item top flex">
                    <h3>{el.key}</h3>
                    <div className="progress">     
                        <div className={"progress-bar"} role="progressbar">   
                            <p id={`id="count-${this.state.skillCounter++}"`}>
                                {/* -- verworfen, siehe counter.js -- <Counter value={el.value} /> */}
                                {el.value + "%"}
                            </p>
                        </div>
                    </div>
                </div>
            );
        });
    }

    skillsBottomArray() { // object-> object basierend / wie in php Version
        return Object.keys(this.state.skillsBottom).map((el, i) => {

            return (
                <div key={i} className="prog-bottom--item">
                    <h3>{el}</h3>
                    { Object.keys(this.state.skillsBottom[el]).map((key, x) => {
                        return (
                                <div className="skill-item bottom">                    
                                    <h4>{key}</h4>
                                        <div className="progress">     
                                            <div className="progress-bar" role="progressbar">   
                                                <p id={`id="count-${this.state.skillCounter++}"`}>{this.state.skillsBottom[el][key] + "%"}</p>
                                            </div>                    
                                        </div>
                                </div>
                            ) // END return 2
                        }) // END Object.keys -> keys
                    } 
                </div>
                ) // END return 1
        });
    }  

    render() {
        
        return (
            <>
                <div id="skill-loader">
                    <div className="angle top-left"></div>
                    <div className="angle top-right"></div>
                    <div className="angle bottom-left"></div>
                    <div className="angle bottom-right"></div>
                </div>
                <header>
                    <div className="header-container">
                        <div className="profil">
                            <img src={ profil } alt="Ch. Gabler, Webentwickler und ganz netter Typ so :)" />
    
                            <div id="skill-set">
                                <button id="skill-close">&#10006;</button>
                                <div className="skill-content">
                                    <h2>Skillset</h2>
                                    {this.skillsArray()}
                                    <div id="prog-bottom" className="flex">
                                        {this.skillsBottomArray()}
                                    </div>   
                                </div>                        
                            </div>
    
                            <div className="profil-links">
                                <div className="profil-item--container">
                                    <div className="profil-item"><p id="skills">Meine Skills</p></div>
                                </div>
                                <div className="profil-item--container">
                                    <div className="profil-item"><p><a href="mailto:info@chris-gabler.de?subject=Nachricht von Projekt-Seite">info@chris-gabler.de</a></p></div>
                                </div>
                                <div className="profil-item--container">
                                    <div className="profil-item"><p><a href="tel:+4915122917743">Tel: +49 151 22 91 77 43</a></p></div>
                                </div>
                            </div>
                        </div>
                        <div className="menu-container">
                            <button id="mnu-button" className="">
                                <span className="ham-menu-1"></span>
                                <span className="ham-menu-2"></span>
                                <span className="ham-menu-3"></span>
                            </button>
                        </div>
                    </div>
                </header>                
            </>
        )
    }
}

export default Header
