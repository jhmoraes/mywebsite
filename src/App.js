import Router from './router/Router'
import GlobalState from './globalState/GlobalState';
import Header from './components/Header/header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

export default App;
