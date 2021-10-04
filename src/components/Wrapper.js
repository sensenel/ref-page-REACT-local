import portImgArray from './images';
import { Link } from 'react-router-dom';

//in public folder könne wohl die imgs wie gewohnt ausgreschrieben werden? 
//https://www.codegrepper.com/code-examples/javascript/img+src+with+alt+in+react+js

const imgArray = portImgArray.map((img, i) => 
    <img
        key={i} 
        className={`content-image__img img-${i+1}`} 
        src={img} 
        alt={`Ch Gabler Portfolio No${i+1}`} />
    ); 

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
                <a id="onClick" href={el[0]} className="content-header__item__link projekt-link">
                    <h2 className="item-header">{el[1]}<span className="header-categorie">{el[2]}</span></h2>
                </a>
            :
                <Link to={el[0]} className="content-header__item__link projekt-link">
                    <h2 className="item-header">{el[1]}<span className="header-categorie">{el[2]}</span></h2>
                </Link>
            }
        </li>
    )
});

const Wrapper = () => {
    return (
        <div id="wrapper">
        { /* <Projekte /> */ }
            <div className="content">
                <div className="content-image">
                    <div className="image-wrapper">
                        <span id="img-layer"></span>
                        {imgArray}
                    </div>
                </div>
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
            </div>
        </div>
    )
}

export default Wrapper
