import './App.css';
import Answers from './components/Answers/Answers';
import Header from './components/Header/Header';
import Mouses from './components/Mouses/Mouses';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <Header></Header>
        <Mouses></Mouses>
        <Answers></Answers>
      </div>
    </div>
  );
}

export default App;
