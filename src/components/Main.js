import { Switch, Route } from 'react-router-dom';
import Projekt_1 from './Projekt_1';

const Main = () => {
    return (
        <main>
            <Switch>
                <Route path='/projekt-1' component={Projekt_1}/>
{/*                 <Route exact path='/projekt-1' component={Projekt_1}/>
                <Route path='/roster' component={Roster}/>
                <Route path='/schedule' component={Schedule}/> */}
            </Switch>
        </main>
    )
}

export default Main
