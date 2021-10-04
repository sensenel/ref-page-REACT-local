import portImgArray from './images';
import Router from './Router';
import { MemoryRouter } from 'react-router'; // verhindert dass komplette URL nach Domain angezeigt wird - in diesen´m Fall wollen wir das so 

//in public folder könne wohl die imgs wie gewohnt ausgreschrieben werden? 
//https://www.codegrepper.com/code-examples/javascript/img+src+with+alt+in+react+js

const imgArray = portImgArray.map((img, i) => 
    <img
        key={i} 
        className={`content-image__img img-${i+1}`} 
        src={img} 
        alt={`Ch Gabler Portfolio No${i+1}`} />
    ); 
    
const Wrapper = () => {
    return (
        <div id="wrapper">
            <div className="content">
                <div className="content-image">
                    <div className="image-wrapper">
                        <span id="img-layer"></span>
                        {imgArray}
                    </div>
                </div>
                <MemoryRouter> {/* siehe Zeile 3 */}
                    <Router />              
                </MemoryRouter>
            </div>
        </div>
    )
}

export default Wrapper
