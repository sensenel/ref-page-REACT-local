
const Projekt_1 = () => {
    return (
        <div id="projekt-1" className="innerwidth detail-seite">
            <div className="detail-header flex top-transition--header">
                <h1>Logistik</h1>
            </div>
            <div className="detail-seite--content top-transition--para">
                <h2>Tätigkeiten</h2>
                <ul>
                    <li>CMS: Joomla</li>
                    <li>Templating aller Ansichten (PHP, CSS, jQuery und JS)</li>
                    <li>Mehrsprachigkeit DE / EN</li>
                    <li>Parallax-Scroll (vanilla js, ohne ext. script)</li>
                    <li>Lazy-Load: Images (AJAX), Content (ViewPort visible)</li>
                    <li>Responsive (ohne BootStrap) / adaptive (User Agent via mobile-detect.php)<br />für mobile / Desktop</li>
                </ul>
                <h2>Design</h2>
                <p className="small">Externer Designer</p>
            </div>
            <div className="content-bottom--links flex">
                <a className="bck-link top-transition--link" href="/">Zurück</a>
                <div className="demo-link--container">
                    <a className="demo bck-link top-transition--link" href="https://logistik.chris-gabler.de/" 
                        target="_blank" >live Demo</a>
                        <span className="info" data-title="Dev-Umgebung: daher kein Cookie Opt-out"></span>
                </div>
            </div>
         </div>
    )
}

export default Projekt_1
