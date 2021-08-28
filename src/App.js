import './App.css';
import getItem from "@/use-effect-usage";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {'React Basics'}
      </header>
      {getItem()}
    </div>
  );
}

export default App;
