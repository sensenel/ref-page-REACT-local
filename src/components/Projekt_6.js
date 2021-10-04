
const Projekt_6 = () => {
    return (
        <div id="frame">
            <div id="view">
                <div id="projekt-6" className="innerwidth detail-seite">
                    <div className="detail-header flex top-transition--header">
                        <h1>Beauty</h1>
                    </div>
                    <div className="detail-seite--content top-transition--para">
                        <h2>Tätigkeiten</h2>
                        <ul>
                            <li key={0} >CMS: Joomla</li>
                            <li key={1} >Design und Konzeption</li>
                            <li key={2} >Templating aller Ansichten (PHP, CSS, jQuery und JS)</li>
                            <li key={3} >Vanilla JS Menu Animation (ohne ext. script)</li>
                            <li key={4} >SVG Animation</li>
                            <li key={5} >Responsive Design / adaptive (User Agent via mobile-detect.php)<br />für mobile / Desktop</li>
                        </ul>
                    </div>
                    <div className="content-bottom--links flex">
                        <a className="bck-link top-transition--link" href="/">Zurück</a>
                        <div className="demo-link--container">
                            <a className="demo bck-link top-transition--link" href="https://brautstyling-muenchen-kosmetik.com/" 
                                target="_blank" >live Demo</a>
                                <span className="info" data-title="Live-Seite"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projekt_6
