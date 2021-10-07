import cwLogo from '../assets/codewars-logo.svg';

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-content">
                <nav>
                <a className="menu-header pacman-link" href="https://pacman.chris-gabler.de/" target="_blank">PacMan <span>
                         pure &#8226; Vanilla Javascript</span>
                         <div className="pacman"></div>
                    </a>
                    <a className="menu-header codepen-link" href="https://codepen.io/SENSENEL/" target="_blank">CodePen <span>
                         Frontend &#8226; Test- und Spielwiese</span>
                         <div className="codepen">
                            <div className="cube">
                                <div className="side front"></div>
                                <div className="side left"></div>
                                <div className="side right"></div>
                                <div className="side back"></div>
                            </div>
                         </div>
                    </a>
                    <a className="menu-header codewars-link" href="https://www.codewars.com/users/SENSENEL" target="_blank">CodeWars <span>
                         Code Challenges</span>
                         <div className="codewars">
                             <img className="codewars-img" src={cwLogo} alt="" />
                         </div>
                    </a>
                </nav>
            </div>
        </div>
    )
}

export default Nav
