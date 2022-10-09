import './App.css';
import List from './List';
import useBands from './use-bands';

function App() {
  const bands = useBands();

  const unique = array => [...new Set(array)]
  const capitalize = string => `${string.charAt(0).toUpperCase()
}${string.slice(1)}`
  const bandNames = []
  const uniqueInstruments = []

  return (
    <div className="App">
      <p>These bands:</p>
      <List items={bandNames} />

      <p>Have the following instruments:</p>
      <List items={uniqueInstruments} />
    </div>
  );
}

export default App;
