import { Switch, Route } from 'react-router-dom';
import Start from './Start';
import Projekt_1 from './Projekt_1';
import Projekt_2 from './Projekt_2';
import Projekt_3 from './Projekt_3';
import Projekt_4 from './Projekt_4';
import Projekt_5 from './Projekt_5';
import Projekt_6 from './Projekt_6';

// Router Tutorial (Codeacademy): https://blog.pshrmn.com/simple-react-router-v4-tutorial/


const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Start}/>
                <Route path='/projekt-1' component={Projekt_1}/>
                <Route path='/projekt-5' component={Projekt_2}/>
                <Route path='/projekt-3' component={Projekt_3}/>
                <Route path='/projekt-4' component={Projekt_4}/>
                <Route path='/projekt-2' component={Projekt_5}/>
                <Route path='/projekt-6' component={Projekt_6}/>
            </Switch>
        </>
    )
}

export default Router
