import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MainPage/>
      <Footer/>
    </div>
  );
}

export default App;
