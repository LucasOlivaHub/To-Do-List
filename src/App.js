import './App.css';
import { Header } from './Components/Header';
import { ToDoList } from './Components/ToDoList';
import { BackgroundProvider } from './Context/BackgroundContext';
import { Background } from './Components/Background';



function App() {
  return (
    <div className="App">
      <BackgroundProvider>
        <Background>
 
          </Background>
      </BackgroundProvider>
    </div>

  );
}

export default App;
