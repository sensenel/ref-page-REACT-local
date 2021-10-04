import { Link } from 'react-router-dom';

// HTML Entities verwenden: https://stackoverflow.com/questions/63240955/render-html-entities-inside-a-string-in-react
const headerItems = {
    1: ["/projekt-1", "Logistik", `CMS ${String.fromCharCode(8226)} Templating php/JS/CSS3`, "portfolio-1.jpg"],
    2: ["/projekt-5", "Music", `CMS ${String.fromCharCode(8226)} Design & Templating php/CSS3`, "portfolio-2.jpg"],
    3: ["/projekt-3", "Agentur", `experimentell ${String.fromCharCode(8226)} animiert ${String.fromCharCode(8226)} Storytelling`, "portfolio-3.jpg"],
    4: ["/projekt-4", "Architektur", `CMS ${String.fromCharCode(8226)} Templating php/JS/CSS3`, "portfolio-4.jpg"],
    5: ["/projekt-2", "Finanzen", `CMS ${String.fromCharCode(8226)} Templating php/JS/CSS3`, "portfolio-5.jpg"],
    6: ["/projekt-6", "Beauty", `CMS ${String.fromCharCode(8226)} Design & Templating JS/php/CSS3`, "portfolio-6.jpg"]
}

const headerItemArray = Object.values(headerItems).map((el, i) => {

    return (
        <li key={i} className="content-header__item">
            { i === 4 ? 
                <Link id="onClick" to={el[0]} className="content-header__item__link projekt-link">
                    <h2 className="item-header">{el[1]}<span className="header-categorie">{el[2]}</span></h2>
                </Link>
            :
                <Link to={el[0]} className="content-header__item__link projekt-link">
                    <h2 className="item-header">{el[1]}<span className="header-categorie">{el[2]}</span></h2>
                </Link>
            }
        </li>
    )
});

const Start = () => {
    return (
        <div className="content-header">
            <div id="frame">
                <div id="view">
                    <ol className="content-header--items">
                        <div className="direct-links">
                        {headerItemArray}
                        </div>
                    </ol>
                </div>
            </div>
        </div>  
    )
}

export default Start
