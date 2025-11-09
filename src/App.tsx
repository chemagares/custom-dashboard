import './App.css';
import { Dashboard } from './components/Dashboard/Dashboard';

function App() {
  return (
    <>
      <div className="desktop-only">
        Please view this project on a desktop device
      </div>
      <Dashboard></Dashboard>
    </>
  );
}

export default App;
