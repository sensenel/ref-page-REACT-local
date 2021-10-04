import phpLogo from '../assets/php-logo.png';

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
                            <h4><em>Zur PHP-Version wechseln?</em></h4>
                            <img src={phpLogo} alt="Ch Gabler Referenzseite als PHP Web-App" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
