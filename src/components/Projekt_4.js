
const Projekt_4 = () => {
    return (
        <div id="frame">
            <div id="view">
                <div id="projekt-4" className="innerwidth detail-seite">
                    <div className="detail-header flex top-transition--header">
                        <h1>Architektur</h1>
                    </div>
                    <div className="detail-seite--content top-transition--para">
                        <h2>Tätigkeiten</h2>
                        <ul>
                            <li key={0} >CMS: Joomla</li>
                            <li key={1} >Templating aller Ansichten (PHP, CSS, jQuery und JS)</li>
                            <li key={2} >Bildergalerie Eigenentwicklung - vanilla JS  </li>
                            <li key={3} >Responsive (ohne BootStrap) / adaptive (User Agent via mobile-detect.php)<br />für mobile / Desktop</li>
                        </ul>
                        <h2>Design</h2>
                        <p className="small">Externer Designer</p>
                    </div>
                    <div className="content-bottom--links flex">
                        <a className="bck-link top-transition--link" href="/">Zurück</a>
                        <div className="demo-link--container">
                            <a className="demo bck-link top-transition--link" href="https://architektur.chris-gabler.de/" 
                                target="_blank" >live Demo</a>
                                <span className="info" data-title="Dev-Umgebung: daher kein Cookie Opt-out"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projekt_4
