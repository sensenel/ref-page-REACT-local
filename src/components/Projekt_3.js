
const Projekt_3 = () => {
    return (
        <div id="frame">
            <div id="view">
                <div id="projekt-3" className="innerwidth detail-seite">
                    <div className="detail-header flex top-transition--header">
                        <h1>Experimentell</h1>
                    </div>
                    <div className="detail-seite--content top-transition--para">
                        <h2>Tätigkeiten</h2>
                        <ul>
                            <li key={0} >CMS: Joomla</li>
                            <li key={1} >Konzeption, StoryTelling und Design</li>
                            <li key={2} >Templating (SVG (Adobe Illustrator), PHP, JS, CSS und jQuery)</li>
                            <li key={3} >Page-Transitions mittels JS-Animations Framework "GSAP"</li>
                            <li key={4} >AJAX Framework barba.js</li>                    
                            <li key={5} >Responsive (ohne BootStrap) / adaptive (User Agent via mobile-detect.php)<br />für mobile / Desktop</li>
                        </ul>
                    </div>
                    <div className="content-bottom--links flex">
                        <a className="bck-link top-transition--link" href="/">Zurück</a>
                        <div className="demo-link--container">
                            <a className="demo bck-link top-transition--link" href="https://experimentell.chris-gabler.de/" 
                                target="_blank" >live Demo</a>
                                <span className="info" data-title="Dev-Umgebung: daher kein Cookie Opt-out"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Projekt_3
