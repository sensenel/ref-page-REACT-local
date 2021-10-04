import { Switch, Route } from 'react-router-dom';
import Start from './Start';
import Projekt_1 from './Projekt_1';

// Router Tutorial (Codeacademy): https://blog.pshrmn.com/simple-react-router-v4-tutorial/


const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Start}/>
                <Route path='/projekt-1' component={Projekt_1}/>
{/*                 <Route exact path='/projekt-1' component={Projekt_1}/>
                <Route path='/roster' component={Roster}/>
                <Route path='/schedule' component={Schedule}/> */}
            </Switch>
        </>
    )
}

export default Router
