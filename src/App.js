import Router from './router/Router'
import GlobalState from './globalState/GlobalState';

function App() {
  return (
    <GlobalState>
      <Router/>
    </GlobalState>
  );
}

export default App;
