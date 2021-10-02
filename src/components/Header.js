import profil from '../assets/ch-gabler.png';

const skills = {
    'html(5)': '91%',
    'CSS(3)' : '94%',
    'JavaScript': '82%',
    'PHP': '71%',
    'mySQL': '55%'
}

const skillsBottom = {
        "Frameworks": {'React': '67%', 'GSAP': '86%', 'jQuery': '79%', 'BootStrap': '66%', "Node.js": '28%' },
        "CMS-Systeme": {'Joomla': '89%', 'WordPress': '33%', 'SilverStripe': '40%'},
        "Versionierung": {'GitHub': '73%', 'BitBucket': '55%'}
}

const skillsArray = Object.keys(skills).map((el, i) => {
    return (
        <div key={i} className="skill-item top flex">
            <h3>{el}</h3>
            <div className="progress">     
                <div className="progress-bar" role="progressbar">   
                    <p>{skills[el]}</p>
                </div>
            </div>
        </div>
    );
});

const skillsBottomArray = Object.keys(skillsBottom).map((el, i) => {

    return (
        <div key={i} className="prog-bottom--item">
            <h3>{el}</h3>
            { Object.keys(skillsBottom[el]).map((key, x) => {
                return (
                        <div className="skill-item bottom">                    
                            <h4>{key}</h4>
                                <div className="progress">     
                                    <div className="progress-bar" role="progressbar">   
                                        <p>{skillsBottom[el][key]}</p>
                                    </div>                    
                                </div>
                        </div>
                    ) // END return 2
                }) // END Object.keys -> keys
            } { /* js in JSX OUT */ }
        </div>
        ) // END return 1
});

const Header = () => {
    return (
    <header>    
        <div className="header-container">
            <div className="profil">
                <img src={ profil } alt="Ch. Gabler, Webentwickler und ganz netter Typ so :)" />

                <div id="skill-set">
                    <button id="skill-close">&#10006;</button>
                    <div className="skill-content">
                        <h2>Skillset</h2>
                        {skillsArray}
                        <div id="prog-bottom" className="flex">
                            {skillsBottomArray}
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
    )
}

export default Header
