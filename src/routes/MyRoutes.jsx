import {Switch, Route} from 'react-router-dom'
import Login from '../pages/Login';
import Register from '../pages/Register';
import Administrator from '../pages/Administrator';

const MyRoutes = ()=>{
    return (
    <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/register"  component={Register} />
        <Route path="/admin"  component={Administrator} />
    </Switch>
    );
}
export default MyRoutes;