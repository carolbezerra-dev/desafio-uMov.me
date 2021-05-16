import './App.css';
import { Route, Switch } from 'react-router-dom';
import Lottery from './pages/Lottery';
import Payment from './pages/Payment';

function App() {
  return (
    <Switch>
        <Route exact path='/' component={ Lottery } />
        <Route path='/pagamento' component={ Payment } />
    </Switch>
  );
}

export default App;
