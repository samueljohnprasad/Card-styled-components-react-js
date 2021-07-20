import logo from './logo.svg';
import './App.css';
import Badge from './components/Badge'
import Grid  from './components/Card';
import data from './utils'

function App() {
  return (
    <div className="App">
       <Badge fixed>hello samuel john prasad</Badge>
       <Grid></Grid>
    </div>
  );
}

export default App;
