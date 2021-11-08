import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Container } from 'semantic-ui-react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Roles from './pages/Roles';
import Users from './pages/Users';



function App() {
  return (
    <Router>
      <Navbar />
      <Container style={{ padding: "2em 0em" }}>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/products' component={Products}/>
        <Route path='/roles' component={Roles}/>
        <Route path='/user-list' component={Users} />
      </Switch>
      </Container>
    </Router>
  );
}

export default App;
