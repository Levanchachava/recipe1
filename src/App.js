import logo from './logo.svg';
import './App.css';
import Popular from './components/Popular';
import Veggie from './components/Veggie';
import Category from './components/Category';
import { Link, Route, Routes } from 'react-router-dom';
import Italian from './components/Italian';
import Page from './components/Page';
import Home from './Home';
import Search from './components/Search';
import { GiKnifeFork } from 'react-icons/gi';

function App() {
  return (
    <div className="App">
      <Link to={"/"}>
        <nav className='nav'>
          <GiKnifeFork style={{fontSize:"30px"}} />
          <h4>Delicious</h4>
        </nav>
      </Link>
      
      <Search />
      <Category />
      <Page />
      {/* <Veggie />
      <Popular /> */}


    </div>
  );
}

export default App;
