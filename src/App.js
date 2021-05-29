import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';
import CreateProject from './components/projects/CreateProject';
import ProjectDetails from './components/projects/ProjectDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/project/:id" component={ProjectDetails} />
            <Route exact path="/signin" component={SignIn}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/create" component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
