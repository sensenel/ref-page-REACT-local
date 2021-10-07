import phpLogo from '../assets/php-logo.png';
import ghLogo from '../assets/github-logo-white.png';

const Footer = () => {
    return (
        <div id="footer">
            <div className="copyright">
                <p>&copy;Christian Gabler {/* <?php print date('Y'); ?> */ }  made with <span>&hearts;</span></p>
            </div>
            <div className="bottom">
                <div className="app-select">
                    <a href="https://projekte.chris-gabler.de/" target="_blank">
                        <div className="app-select--container">
                            <h4><span>i </span><em>Zu PHP-Version wechseln?</em></h4>
                            <img src={phpLogo} alt="Ch Gabler Referenzseite als PHP Web-App" />
                        </div>
                    </a>
                </div>
            </div>
            <div className="github-container">
                <a href="https://github.com/sensenel/ref-landingpage-remote" target="_blank">
                    <div className="github-select">
                        <h4><span>i </span><em>Repo' dieser Seite auf gitHub ansehen</em></h4>
                        <img src={ghLogo} al="" />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Footer
