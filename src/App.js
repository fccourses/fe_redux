import { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

// import Home from './pages/Home';
const Home = lazy(() => import('./pages/Home'));
const CounterPage = lazy(() => import('./pages/Counter'));
const Task = lazy(() => import('./pages/Task'));

const App = props => {
  return (
    <div>
      <Router>
        <ul>
          <li>
            <NavLink to='/'>Heroes</NavLink>
          </li>
          <li>
            <NavLink to='/task'>Task</NavLink>
          </li>
          <li>
            <NavLink to='/counter'>Counter</NavLink>
          </li>
        </ul>
        <Suspense fallback={'Loading...'}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/task' component={Task} />
            <Route path='/counter' component={CounterPage} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
