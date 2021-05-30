import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import WhyUsScreen from './components/screens/WhyUsScreen';
import AboutUsScreen from './components/screens/AboutUsScreen';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/whyUs" component={WhyUsScreen}/>
          <Route exact path="/aboutUs" component={AboutUsScreen}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
