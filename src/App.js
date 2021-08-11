import './App.css';
import HomePage from './Pages/HomePage';
import SearchPage from './Pages/SearchPage';
import { BrowserRouter,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/search" component={SearchPage}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
