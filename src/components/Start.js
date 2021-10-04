import { Link } from 'react-router-dom';


const headerItems = {
    1: ["/projekt-1", "Logistik", "CMS &#8226; Templating php/JS/CSS3", "portfolio-1.jpg"],
    2: ["/projekt-5.html", "Music", "CMS &#8226; Design & Templating php/CSS3", "portfolio-2.jpg"],
    3: ["/projekt-3.html", "Agentur", "experimentell &#8226; animiert &#8226; Storytelling", "portfolio-3.jpg"],
    4: ["/projekt-4.html", "Architektur", "CMS &#8226; Templating php/JS/CSS3", "portfolio-4.jpg"],
    5: ["/projekt-2.html", "Finanzen", "CMS &#8226; Templating php/JS/CSS3", "portfolio-5.jpg"],
    6: ["/projekt-6.html", "Beauty", "CMS &#8226; Design & Templating JS/php/CSS3", "portfolio-6.jpg"]
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
