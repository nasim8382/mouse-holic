import './App.css';
import Header from './components/Header/Header';
import Mouses from './components/Mouses/Mouses';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <Header></Header>
        <Mouses></Mouses>
      </div>
    </div>
  );
}

export default App;
