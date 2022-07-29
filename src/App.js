import './App.css'
import AppLabel, { TYPES } from './components/atoms/AppLabel/AppLabel';
function App() {
  return (
    <div className='App'>
      <AppLabel type={TYPES.PAR} isBold>Hello Claudio</AppLabel>
    </div>
  );
}

export default App;
