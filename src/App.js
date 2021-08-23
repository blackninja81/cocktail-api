import './App.css';
import HomePage from './Pages/HomePage';
import SearchPage from './Pages/SearchPage';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/search" component={SearchPage}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
