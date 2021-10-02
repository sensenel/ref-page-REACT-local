import profil from '../assets/ch-gabler.png';

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
                        {/*
                        <?php 
                            foreach($skillsArray as $key => $value) {
                                print   '<div className="skill-item top flex">
                                            <h3>'.$key.'</h3>
                                            <div className="progress">     
                                                <div className="progress-bar" role="progressbar">   
                                                    <p>'.$value.'</p>
                                                </div>
                                            </div>
                                        </div>';
                            }
                        ?> */ }
                        <div id="prog-bottom" className="flex">
                            {/*
                            <?php 
                            foreach($skillsArrayBottom as $key => $array) {
                                print   '<div className="prog-bottom--item">
                                            <h3>'.$key.'</h3>';
                                    foreach($array as $index => $value) {
                                        print   '<div className="skill-item bottom">
                                                <h4>'.$index.'</h4>
                                                    <div className="progress">     
                                                        <div className="progress-bar" role="progressbar">   
                                                            <p>'.$value.'</p>
                                                        </div>
                                                    </div>
                                                </div>';                                                                                          
                                        }
                                print '</div>';
                            }
                            
                        ?> */ }
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
