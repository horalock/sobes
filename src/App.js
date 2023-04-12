import './App.css';
import NavBar from './components/navBar/NavBar';
import Content from './components/contentBox/Content';
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <h1>Hey</h1>
      <div className='nav-items'>
        <Link to="/" className='nav-item'>Описание</Link>
        <Link to="/html" className='nav-item'>html</Link>
        <Link to="/css" className='nav-item'>css</Link>
        <Link to="/js" className='nav-item'>js</Link>
        <Link to="/tasks" className='nav-item'>tasks</Link>
        <Link to="/tricks" className='nav-item'>tricks</Link>
      </div>

      <Routes>
        <Route path='/' Component={() => <Content title="main" />} />
        <Route path='/html' Component={() => <Content title="html" />} />
        <Route path='/css' Component={() => <Content title="css" />} />
        <Route path='/js' Component={() => <Content title="js" />} />
        <Route path='/tasks' Component={() => <Content title="tasks" />} />
        <Route path='/tricks' Component={() => <Content title="tricks" />} />
      </Routes>
    </div>
  );
}

export default App;
