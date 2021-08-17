import './App.css';
import Content from './components/Profile/Content';
import Header from './components/Header/Header';
import Nav from './components/Navbar/NavMenu';

const App = () => {
  return (
     <div className="app-wrapper">
        <Header />
        <Nav />
        <Content />
     </div>
  )
}

export default App;
