
const Projekt_2 = () => {
    return (
        <div id="frame">
            <div id="view">
                <div id="projekt-2" className="innerwidth detail-seite">
                    <div className="detail-header flex top-transition--header">
                        <h1>Musikproduktion</h1>
                    </div>
                    <div className="detail-seite--content top-transition--para">
                        <h2>Tätigkeiten</h2>
                        <ul>
                            <li key={0} >CMS: Joomla</li>
                            <li key={1} >Komplettes Rework eines vormaligen Kauf-Templates:
                                <ul>
                                    <li key={2} >Rekreation von vertical- zu horizontal-scroll</li>
                                    <li key={3} >Layout rekomposition von Content auf Background</li>
                                    <li key={4} >erweiterung und anpassen zusätzlicher 3rd-party extensions und Plug-Ins</li>
                                </ul>
                            </li>
                            <li key={5} >Präsentation und StoryTelling</li>
                            <li key={6} >Responsive Ansichten für mobile / Desktop</li>
                        </ul>
                    </div>
                    <div className="content-bottom--links flex">
                        <a className="bck-link top-transition--link" href="/">Zurück</a>
                        <div className="demo-link--container">
                            <a className="demo bck-link top-transition--link" href="https://black-keys-tonstudio.com/" 
                                target="_blank"
                                data-title="Live-Seite mit Cookie opt-out">live Demo</a>
                                <span className="info" data-title="Live-Seite"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projekt_2

