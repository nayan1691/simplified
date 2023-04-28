import BasicTabs from "./components/TabBar"
import './App.css';
import ResponsiveAppBar from "./components/Header";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <div className="App-section">
      <BasicTabs />
      </div>
    </div>
  );
}

export default App;
